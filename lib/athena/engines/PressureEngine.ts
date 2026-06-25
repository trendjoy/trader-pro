import { EventType, MatchEvent } from "../models/match-event";
import {
  PressureAnalysis,
  PressureLevel,
} from "../models/pressure-analysis";

export class PressureEngine {

  analyze(events: MatchEvent[]): PressureAnalysis {

    let score = 0;

    for (const event of events) {

      switch (event.type) {

        case EventType.ATTACK:
          score += 5;
          break;

        case EventType.DANGER_ATTACK:
          score += 10;
          break;

        case EventType.CORNER:
          score += 8;
          break;

        case EventType.SHOT:
          score += 12;
          break;

        case EventType.SHOT_ON_TARGET:
          score += 20;
          break;

        case EventType.GOAL:
          score += 40;
          break;

        default:
          break;

      }

    }

    let level: PressureLevel = PressureLevel.LOW;

    if (score >= 100) {

      level = PressureLevel.CRITICAL;

    } else if (score >= 70) {

      level = PressureLevel.HIGH;

    } else if (score >= 35) {

      level = PressureLevel.MEDIUM;

    }

    return {

      score,

      level,

      confidence: Math.min(1, score / 100),

    };

  }

}