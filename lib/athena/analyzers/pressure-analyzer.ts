import { PRESSURE_WEIGHTS } from "../constants/pressure-weights";
import { MatchEvent } from "../models/match-event";
import {
  PressureAnalysis,
  PressureLevel,
} from "../models/pressure-analysis";

export class PressureAnalyzer {

  public analyze(events: MatchEvent[]): PressureAnalysis {

    if (events.length === 0) {
      return {
        score: 0,
        level: PressureLevel.LOW,
        confidence: 0,
      };
    }

    let score = 0;

    for (const event of events) {
      score += PRESSURE_WEIGHTS[event.type];
    }

    score = Math.min(score, 100);

    return {
      score,
      level: this.getLevel(score),
      confidence: Number((score / 100).toFixed(2)),
    };
  }

  private getLevel(score: number): PressureLevel {

    if (score < 25) {
      return PressureLevel.LOW;
    }

    if (score < 50) {
      return PressureLevel.MEDIUM;
    }

    if (score < 75) {
      return PressureLevel.HIGH;
    }

    return PressureLevel.CRITICAL;
  }
}