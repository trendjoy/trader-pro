import { MatchEvent } from "../models/match-event";

import {
  MomentumAnalysis,
  MomentumTrend,
} from "../models/momentum-analysis";

export class MomentumEngine {

  analyze(events: MatchEvent[]): MomentumAnalysis {

    const recentEvents = events.slice(-5);

    let value = 0;

    for (const event of recentEvents) {

      switch (event.type) {

        case "ATTACK":
          value += 10;
          break;

        case "DANGER_ATTACK":
          value += 20;
          break;

        case "CORNER":
          value += 15;
          break;

        case "SHOT":
          value += 20;
          break;

        case "SHOT_ON_TARGET":
          value += 30;
          break;

        case "GOAL":
          value += 50;
          break;

        default:
          break;

      }

    }

    value = Math.min(value, 100);

    let trend = MomentumTrend.STABLE;

    if (value >= 70) {

      trend = MomentumTrend.RISING;

    } else if (value <= 20) {

      trend = MomentumTrend.FALLING;

    }

    return {

      value,

      trend,

      confidence: Math.min(1, value / 100),

    };

  }

}