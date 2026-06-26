import { MatchState } from "../models/MatchState";

import { PressureResult } from "./PressureEngine";
import { MomentumResult } from "./MomentumEngine";
import { DominanceResult } from "./DominanceEngine";

import { ThreatResult } from "../models/ThreatResult";

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

  expectedSide:
    | "HOME"
    | "AWAY"
    | "NONE";

  confidence: number;

  reasons: string[];

}

export class GoalProbabilityEngine {

  analyze(

    state: MatchState,

    pressure: PressureResult,

    momentum: MomentumResult,

    threat: ThreatResult,

    dominance: DominanceResult

  ): GoalProbabilityResult {

    const minuteFactor =
      this.calculateMinuteFactor(
        state.minute
      );

    const homeDominance =

      dominance.dominantSide === "HOME"

        ? dominance.score

        : 0;

    const awayDominance =

      dominance.dominantSide === "AWAY"

        ? dominance.score

        : 0;

    const homeScore =

      pressure.home.score * 0.25 +

      momentum.home.score * 0.20 +

      threat.home.score * 0.35 +

      homeDominance * 0.15 +

      minuteFactor;

    const awayScore =

      pressure.away.score * 0.25 +

      momentum.away.score * 0.20 +

      threat.away.score * 0.35 +

      awayDominance * 0.15 +

      minuteFactor;

    let expectedSide:
      "HOME" | "AWAY" | "NONE" = "NONE";

    if (

      Math.abs(

        homeScore -

        awayScore

      ) >= 5

    ) {

      expectedSide =

        homeScore > awayScore

          ? "HOME"

          : "AWAY";

    }

    const probability =

      Math.min(

        99,

        Math.round(

          Math.max(

            homeScore,

            awayScore

          )

        )

      );

    return {

      probability,

      expectedSide,

      confidence:
        probability / 100,

      level:
        this.calculateLevel(
          probability
        ),

      reasons:
        this.buildReasons(

          state,

          pressure,

          momentum,

          threat,

          dominance

        ),

    };

  }

  private calculateMinuteFactor(
    minute: number
  ): number {

    let factor = 0;

    if (
      minute >= 60
    ) {

      factor += 2;

    }

    if (
      minute >= 75
    ) {

      factor += 3;

    }

    if (
      minute >= 85
    ) {

      factor += 5;

    }

    return factor;

  }

  private calculateLevel(
    probability: number
  ): GoalProbabilityLevel {

    if (
      probability >= 80
    ) {

      return GoalProbabilityLevel.VERY_HIGH;

    }

    if (
      probability >= 60
    ) {

      return GoalProbabilityLevel.HIGH;

    }

    if (
      probability >= 40
    ) {

      return GoalProbabilityLevel.MEDIUM;

    }

    if (
      probability >= 20
    ) {

      return GoalProbabilityLevel.LOW;

    }

    return GoalProbabilityLevel.VERY_LOW;

  }

  private buildReasons(

    state: MatchState,

    pressure: PressureResult,

    momentum: MomentumResult,

    threat: ThreatResult,

    dominance: DominanceResult

  ): string[] {

    const reasons: string[] = [];

    if (
      pressure.dominantSide !== "NONE"
    ) {

      reasons.push(
        "Pressão ofensiva dominante"
      );

    }

    if (
      momentum.dominantSide !== "NONE"
    ) {

      reasons.push(
        "Momentum crescente"
      );

    }

    if (
      threat.home.level === "CRITICAL"
    ) {

      reasons.push(
        "Ameaça crítica do mandante"
      );

    }

    if (
      threat.away.level === "CRITICAL"
    ) {

      reasons.push(
        "Ameaça crítica do visitante"
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
      state.minute >= 75
    ) {

      reasons.push(
        "Minutos finais da partida"
      );

    }

    if (
      state.home.score ===
      state.away.score
    ) {

      reasons.push(
        "Partida empatada"
      );

    }

    return reasons;

  }

}