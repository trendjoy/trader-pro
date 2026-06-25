import {
  DominanceAnalysis,
  DominanceLevel,
} from "../models/dominance-analysis";

import { TeamSide } from "../types/team-side";

import { PressureAnalysis } from "../models/pressure-analysis";
import { MomentumAnalysis } from "../models/momentum-analysis";

export class DominanceEngine {

  analyze(

    homePressure: PressureAnalysis,
    awayPressure: PressureAnalysis,

    homeMomentum: MomentumAnalysis,
    awayMomentum: MomentumAnalysis

  ): DominanceAnalysis {

    const homeScore =
      homePressure.score +
      homeMomentum.value;

    const awayScore =
      awayPressure.score +
      awayMomentum.value;

    if (homeScore === awayScore) {

      return {

        team: null,

        score: 0,

        level: DominanceLevel.LOW,

        confidence: 0,

      };

    }

    const team =
      homeScore > awayScore
        ? TeamSide.HOME
        : TeamSide.AWAY;

    const score = Math.abs(

      homeScore - awayScore

    );

    let level = DominanceLevel.LOW;

    if (score >= 80) {

      level = DominanceLevel.HIGH;

    } else if (score >= 40) {

      level = DominanceLevel.MEDIUM;

    }

    return {

      team,

      score,

      level,

      confidence: Math.min(1, score / 100),

    };

  }

}