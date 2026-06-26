import {
  Opportunity,
  OpportunityType,
} from "./OpportunityEngine";

export enum TradingMarket {

  MATCH_ODDS = "MATCH_ODDS",

  OVER_UNDER = "OVER_UNDER",

  NEXT_GOAL = "NEXT_GOAL",

}

export enum TradingAction {

  NONE = "NONE",

  BACK = "BACK",

  LAY = "LAY",

}

export enum TradingSelection {

  NONE = "NONE",

  HOME = "HOME",

  AWAY = "AWAY",

  DRAW = "DRAW",

  OVER_15 = "OVER_15",

  OVER_25 = "OVER_25",

  NEXT_HOME = "NEXT_HOME",

  NEXT_AWAY = "NEXT_AWAY",

}

export enum StakeLevel {

  NONE = "NONE",

  LOW = "LOW",

  MEDIUM = "MEDIUM",

  HIGH = "HIGH",

}

export interface TradingDecision {

  market: TradingMarket;

  action: TradingAction;

  selection: TradingSelection;

  confidence: number;

  stake: StakeLevel;

  reasons: string[];

}

export class TradingEngine {

  analyze(
    opportunity: Opportunity
  ): TradingDecision {

    switch (
      opportunity.type
    ) {

      case OpportunityType.HOME_DOMINANCE:

        return {

          market:
            TradingMarket.MATCH_ODDS,

          action:
            TradingAction.BACK,

          selection:
            TradingSelection.HOME,

          confidence:
            opportunity.confidence,

          stake:
            this.calculateStake(
              opportunity.confidence
            ),

          reasons:
            opportunity.reasons,

        };

      case OpportunityType.AWAY_DOMINANCE:

        return {

          market:
            TradingMarket.MATCH_ODDS,

          action:
            TradingAction.BACK,

          selection:
            TradingSelection.AWAY,

          confidence:
            opportunity.confidence,

          stake:
            this.calculateStake(
              opportunity.confidence
            ),

          reasons:
            opportunity.reasons,

        };

      case OpportunityType.GOAL_EXPECTATION:

        return {

          market:
            TradingMarket.OVER_UNDER,

          action:
            TradingAction.BACK,

          selection:
            TradingSelection.OVER_15,

          confidence:
            opportunity.confidence,

          stake:
            this.calculateStake(
              opportunity.confidence
            ),

          reasons:
            opportunity.reasons,

        };

      default:

        return {

          market:
            TradingMarket.MATCH_ODDS,

          action:
            TradingAction.NONE,

          selection:
            TradingSelection.NONE,

          confidence: 0,

          stake:
            StakeLevel.NONE,

          reasons: [

            "Nenhuma operação recomendada"

          ],

        };

    }

  }

  private calculateStake(
    confidence: number
  ): StakeLevel {

    if (
      confidence >= 0.85
    ) {

      return StakeLevel.HIGH;

    }

    if (
      confidence >= 0.70
    ) {

      return StakeLevel.MEDIUM;

    }

    if (
      confidence >= 0.50
    ) {

      return StakeLevel.LOW;

    }

    return StakeLevel.NONE;

  }

}