import { PressureResult } from "./PressureEngine";
import { MomentumResult } from "./MomentumEngine";

export enum DominanceLevel {

  BALANCED = "BALANCED",

  SLIGHT = "SLIGHT",

  CLEAR = "CLEAR",

  ABSOLUTE = "ABSOLUTE",

}

export interface DominanceResult {

  score: number;

  level: DominanceLevel;

  dominantSide: "HOME" | "AWAY" | "NONE";

  confidence: number;

}

export class DominanceEngine {

  analyze(

    pressure: PressureResult,

    momentum: MomentumResult

  ): DominanceResult {

    const home =

      pressure.home.score * 0.60 +

      momentum.home.score * 0.40;

    const away =

      pressure.away.score * 0.60 +

      momentum.away.score * 0.40;

    const difference =
      Math.abs(home - away);

    let dominantSide:
      "HOME" |
      "AWAY" |
      "NONE" = "NONE";

    if (
      difference >= 5
    ) {

      dominantSide =
        home > away

          ? "HOME"

          : "AWAY";

    }

    let level =
      DominanceLevel.BALANCED;

    if (
      difference >= 15
    ) {

      level =
        DominanceLevel.SLIGHT;

    }

    if (
      difference >= 30
    ) {

      level =
        DominanceLevel.CLEAR;

    }

    if (
      difference >= 50
    ) {

      level =
        DominanceLevel.ABSOLUTE;

    }

    return {

      score:
        Math.round(difference),

      dominantSide,

      level,

      confidence:
        Math.min(
          1,
          difference / 100
        ),

    };

  }

}