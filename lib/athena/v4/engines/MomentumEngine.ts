import { MatchState } from "../models/MatchState";

import { ScoreNormalizer } from "../core/ScoreNormalizer";

export enum MomentumLevel {

  STABLE = "STABLE",

  BUILDING = "BUILDING",

  STRONG = "STRONG",

  EXPLOSIVE = "EXPLOSIVE",

}

export interface TeamMomentum {

  score: number;

  level: MomentumLevel;

}

export interface MomentumResult {

  home: TeamMomentum;

  away: TeamMomentum;

  dominantSide: "HOME" | "AWAY" | "NONE";

}

export class MomentumEngine {

  private readonly normalizer =
    new ScoreNormalizer();

  analyze(
    state: MatchState
  ): MomentumResult {

    const homeRaw =
      this.calculateMomentum(

        state.home.possession,

        state.home.shots,

        state.home.shotsOnTarget,

        state.home.corners,

        state.home.score,

        state.minute

      );

    const awayRaw =
      this.calculateMomentum(

        state.away.possession,

        state.away.shots,

        state.away.shotsOnTarget,

        state.away.corners,

        state.away.score,

        state.minute

      );

    const normalized =
      this.normalizer.normalize(
        homeRaw,
        awayRaw
      );

    const homeScore =
      normalized.home;

    const awayScore =
      normalized.away;

    return {

      home: {

        score: homeScore,

        level:
          this.calculateLevel(
            homeScore
          ),

      },

      away: {

        score: awayScore,

        level:
          this.calculateLevel(
            awayScore
          ),

      },

      dominantSide:
        this.calculateDominantSide(

          homeScore,

          awayScore

        ),

    };

  }

  private calculateMomentum(

    possession: number,

    shots: number,

    shotsOnTarget: number,

    corners: number,

    goals: number,

    minute: number

  ): number {

    let score = 0;

    score +=
      possession * 0.25;

    score +=
      shots * 6;

    score +=
      shotsOnTarget * 15;

    score +=
      corners * 4;

    score +=
      goals * 20;

    if (
      minute >= 60
    ) {

      score *= 1.05;

    }

    if (
      minute >= 75
    ) {

      score *= 1.10;

    }

    if (
      minute >= 85
    ) {

      score *= 1.20;

    }

    return Math.max(
      0,
      score
    );

  }

  private calculateLevel(
    score: number
  ): MomentumLevel {

    if (
      score >= 80
    ) {

      return MomentumLevel.EXPLOSIVE;

    }

    if (
      score >= 60
    ) {

      return MomentumLevel.STRONG;

    }

    if (
      score >= 35
    ) {

      return MomentumLevel.BUILDING;

    }

    return MomentumLevel.STABLE;

  }

  private calculateDominantSide(

    home: number,

    away: number

  ): "HOME" | "AWAY" | "NONE" {

    if (
      Math.abs(
        home - away
      ) < 8
    ) {

      return "NONE";

    }

    return home > away

      ? "HOME"

      : "AWAY";

  }

}