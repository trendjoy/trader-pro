import { MatchState } from "../models/MatchState";

export enum PressureLevel {

  LOW = "LOW",

  MEDIUM = "MEDIUM",

  HIGH = "HIGH",

  EXTREME = "EXTREME",

}

export interface TeamPressure {

  score: number;

  level: PressureLevel;

}

export interface PressureResult {

  home: TeamPressure;

  away: TeamPressure;

  dominantSide: "HOME" | "AWAY" | "NONE";

}

export class PressureEngine {

  analyze(
    state: MatchState
  ): PressureResult {

    const homeScore =
      this.calculateScore(

        state.home.possession,

        state.home.shots,

        state.home.shotsOnTarget,

        state.home.corners,

        state.home.yellowCards,

        state.home.score,

        state.minute

      );

    const awayScore =
      this.calculateScore(

        state.away.possession,

        state.away.shots,

        state.away.shotsOnTarget,

        state.away.corners,

        state.away.yellowCards,

        state.away.score,

        state.minute

      );

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

  private calculateScore(

    possession: number,

    shots: number,

    shotsOnTarget: number,

    corners: number,

    yellowCards: number,

    goals: number,

    minute: number

  ): number {

    let score = 0;

    score +=
      possession * 0.35;

    score +=
      shots * 8;

    score +=
      shotsOnTarget * 12;

    score +=
      corners * 5;

    score +=
      goals * 15;

    score -=
      yellowCards * 2;

    if (
      minute >= 70
    ) {

      score *= 1.10;

    }

    if (
      minute >= 85
    ) {

      score *= 1.20;

    }

    score =
      Math.max(
        0,
        score
      );

    score =
      Math.min(
        100,
        Math.round(score)
      );

    return score;

  }

  private calculateLevel(
    score: number
  ): PressureLevel {

    if (
      score >= 80
    ) {

      return PressureLevel.EXTREME;

    }

    if (
      score >= 60
    ) {

      return PressureLevel.HIGH;

    }

    if (
      score >= 35
    ) {

      return PressureLevel.MEDIUM;

    }

    return PressureLevel.LOW;

  }

  private calculateDominantSide(

    home: number,

    away: number

  ): "HOME" | "AWAY" | "NONE" {

    if (
      Math.abs(
        home - away
      ) < 10
    ) {

      return "NONE";

    }

    return home > away

      ? "HOME"

      : "AWAY";

  }

}