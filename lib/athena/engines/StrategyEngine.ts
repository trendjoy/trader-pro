import {
  OpportunityAnalysis,
  OpportunityType,
} from "../models/opportunity-analysis";

import {
  TradingAction,
  TradingSignal,
} from "../models/trading-signal";

export class StrategyEngine {

  analyze(
    opportunity: OpportunityAnalysis
  ): TradingSignal {

    if (
      opportunity.type === OpportunityType.NONE
    ) {

      return {

        action: TradingAction.WAIT,

        market: "Nenhum",

        confidence: 0,

        reason: [
          "Sem oportunidade no momento",
        ],

      };

    }

    return {

      action: TradingAction.ENTER,

      market: opportunity.type,

      confidence: opportunity.confidence,

      reason: opportunity.reason,

    };

  }

}