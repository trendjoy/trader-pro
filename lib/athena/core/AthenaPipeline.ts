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

  private readonly athena = new Athena();

  private readonly strategy = new StrategyEngine();

  private readonly coach = new AthenaCoach();

  analyze(snapshot: MatchSnapshot): PipelineResult {

    const intelligence = this.athena.analyze(snapshot);

    const signal = this.strategy.analyze({

      type: intelligence.dominantTeam
        ? "LAY_DRAW" as any
        : "NONE" as any,

      confidence: intelligence.confidence,

      reason: [

        "Pipeline integrada",

      ],

    });

    const insight = this.coach.explain(intelligence);

    return {

      intelligence,

      signal,

      insight,

    };

  }

}