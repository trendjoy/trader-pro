import { MatchState } from "../models/MatchState";
import { PressureResult } from "./PressureEngine";
import { MomentumResult } from "./MomentumEngine";
import { DominanceResult } from "./DominanceEngine";

export enum GoalProbabilityLevel {

  VERY_LOW = "VERY_LOW",

  LOW = "LOW",

  MEDIUM = "MEDIUM",

  HIGH = "HIGH",

  VERY_HIGH = "VERY_HIGH",

}

export interface GoalProbabilityResult {

  probability: number;

  level: GoalProbabilityLevel;

  expectedSide: "HOME" | "AWAY" | "NONE";

  confidence: number;

  reasons: string[];

}

export class GoalProbabilityEngine {

  analyze(

    state: MatchState,

    pressure: PressureResult,

    momentum: MomentumResult,

    dominance: DominanceResult

  ): GoalProbabilityResult {

    const homeScore =

      pressure.home.score * 0.35 +

      momentum.home.score * 0.25 +

      state.home.shotsOnTarget * 8 +

      state.home.shots * 4 +

      state.home.corners * 2 +

      state.home.possession * 0.20;

    const awayScore =

      pressure.away.score * 0.35 +

      momentum.away.score * 0.25 +

      state.away.shotsOnTarget * 8 +

      state.away.shots * 4 +

      state.away.corners * 2 +

      state.away.possession * 0.20;

    let expectedSide:
      "HOME" | "AWAY" | "NONE" = "NONE";

    let strongest =
      Math.max(
        homeScore,
        awayScore
      );

    if (
      Math.abs(
        homeScore -
        awayScore
      ) >= 8
    ) {

      expectedSide =
        homeScore > awayScore

          ? "HOME"

          : "AWAY";

    }

    let probability =
      Math.round(
        Math.min(
          95,
          strongest
        )
      );

    if (
      state.minute >= 75
    ) {

      probability += 5;

    }

    if (
      state.minute >= 85
    ) {

      probability += 5;

    }

    probability =
      Math.min(
        99,
        probability
      );

    let level =
      GoalProbabilityLevel.VERY_LOW;

    if (
      probability >= 25
    ) {

      level =
        GoalProbabilityLevel.LOW;

    }

    if (
      probability >= 45
    ) {

      level =
        GoalProbabilityLevel.MEDIUM;

    }

    if (
      probability >= 65
    ) {

      level =
        GoalProbabilityLevel.HIGH;

    }

    if (
      probability >= 85
    ) {

      level =
        GoalProbabilityLevel.VERY_HIGH;

    }

    const reasons: string[] = [];

    if (
      pressure.dominantSide !== "NONE"
    ) {

      reasons.push(
        "Pressão dominante"
      );

    }

    if (
      momentum.dominantSide !== "NONE"
    ) {

      reasons.push(
        "Momento ofensivo"
      );

    }

    if (
      dominance.level !== "BALANCED"
    ) {

      reasons.push(
        "Domínio territorial"
      );

    }

    if (
      state.home.shotsOnTarget +
      state.away.shotsOnTarget >= 5
    ) {

      reasons.push(
        "Volume de finalizações"
      );

    }

    return {

      probability,

      expectedSide,

      confidence:
        probability / 100,

      level,

      reasons,

    };

  }

}