import { MatchState } from "../models/MatchState";

import {
  ThreatLevel,
} from "../models/ThreatAnalysis";

import {
  ThreatResult,
} from "../models/ThreatResult";

export interface TeamThreat {

  score: number;

  level: ThreatLevel;

}

export class ThreatEngine {

  analyze(
    state: MatchState
  ): ThreatResult {

    const homeScore =
      this.calculateThreat(

        state.home.possession,

        state.home.shots,

        state.home.shotsOnTarget,

        state.home.corners,

        state.home.score,

        state.minute

      );

    const awayScore =
      this.calculateThreat(

        state.away.possession,

        state.away.shots,

        state.away.shotsOnTarget,

        state.away.corners,

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

      confidence:

        Math.max(

          homeScore,

          awayScore

        ) / 100,

      reasons:
        this.buildReasons(

          state,

          homeScore,

          awayScore

        ),

    };

  }

  private calculateThreat(

    possession: number,

    shots: number,

    shotsOnTarget: number,

    corners: number,

    goals: number,

    minute: number

  ): number {

    let score = 0;

    score +=
      possession * 0.20;

    score +=
      shots * 7;

    score +=
      shotsOnTarget * 18;

    score +=
      corners * 4;

    score +=
      goals * 10;

    if (
      minute >= 70
    ) {

      score *= 1.08;

    }

    if (
      minute >= 85
    ) {

      score *= 1.15;

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
  ): ThreatLevel {

    if (
      score >= 80
    ) {

      return ThreatLevel.CRITICAL;

    }

    if (
      score >= 60
    ) {

      return ThreatLevel.HIGH;

    }

    if (
      score >= 35
    ) {

      return ThreatLevel.MEDIUM;

    }

    return ThreatLevel.LOW;

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

  private buildReasons(

    state: MatchState,

    homeScore: number,

    awayScore: number

  ): string[] {

    const reasons: string[] = [];

    if (
      state.home.shotsOnTarget >= 3
    ) {

      reasons.push(
        "Mandante finaliza com perigo"
      );

    }

    if (
      state.away.shotsOnTarget >= 3
    ) {

      reasons.push(
        "Visitante finaliza com perigo"
      );

    }

    if (
      state.home.corners >= 5
    ) {

      reasons.push(
        "Mandante pressiona em escanteios"
      );

    }

    if (
      state.away.corners >= 5
    ) {

      reasons.push(
        "Visitante pressiona em escanteios"
      );

    }

    if (
      state.minute >= 75
    ) {

      reasons.push(
        "Jogo entrando na fase decisiva"
      );

    }

    if (
      homeScore >= 80
    ) {

      reasons.push(
        "Ameaça crítica do mandante"
      );

    }

    if (
      awayScore >= 80
    ) {

      reasons.push(
        "Ameaça crítica do visitante"
      );

    }

    return reasons;

  }

}