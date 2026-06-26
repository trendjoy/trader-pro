import { Athena } from "./Athena";

import { StrategyEngine } from "../engines/StrategyEngine";
import { AthenaCoach } from "../services/AthenaCoach";

import { MatchSnapshot } from "../models/match-snapshot";
import { TradingSignal } from "../models/trading-signal";

export interface PipelineResult {

  intelligence: ReturnType<Athena["analyze"]>;

  signal: TradingSignal;

  insight: string;

}

export class AthenaPipeline {

  private readonly athena =
    new Athena();

  private readonly strategy =
    new StrategyEngine();

  private readonly coach =
    new AthenaCoach();

  analyze(
    snapshot: MatchSnapshot
  ): PipelineResult {

    const intelligence =
      this.athena.analyze(
        snapshot
      );

    const dominantTeam =
      intelligence.state.dominantSide;

    const confidence =
      Math.min(

        1,

        (

          intelligence.pressure.home.score +

          intelligence.pressure.away.score +

          intelligence.momentum.home.score +

          intelligence.momentum.away.score

        ) / 400

      );

    const signal =
      this.strategy.analyze({

        type:

          dominantTeam !== "NONE"

            ? "LAY_DRAW" as any

            : "NONE" as any,

        confidence,

        reason: [

          "Pipeline integrada",

        ],

      });

    const insight =
      this.coach.explain(
        intelligence as any
      );

    return {

      intelligence,

      signal,

      insight,

    };

  }

}