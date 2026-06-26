import {
  Opportunity,
  OpportunityType,
} from "./OpportunityEngine";

export enum TradingMarket {
  MATCH_ODDS = "MATCH_ODDS",
  OVER_UNDER = "OVER_UNDER",
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
  UNDER_25 = "UNDER_25",
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

    switch (opportunity.type) {

      case OpportunityType.BACK_HOME:
        return this.createDecision(
          TradingMarket.MATCH_ODDS,
          TradingAction.BACK,
          TradingSelection.HOME,
          opportunity
        );

      case OpportunityType.BACK_AWAY:
        return this.createDecision(
          TradingMarket.MATCH_ODDS,
          TradingAction.BACK,
          TradingSelection.AWAY,
          opportunity
        );

      case OpportunityType.LAY_DRAW:
        return this.createDecision(
          TradingMarket.MATCH_ODDS,
          TradingAction.LAY,
          TradingSelection.DRAW,
          opportunity
        );

      case OpportunityType.OVER_15:
        return this.createDecision(
          TradingMarket.OVER_UNDER,
          TradingAction.BACK,
          TradingSelection.OVER_15,
          opportunity
        );

      case OpportunityType.OVER_25:
        return this.createDecision(
          TradingMarket.OVER_UNDER,
          TradingAction.BACK,
          TradingSelection.OVER_25,
          opportunity
        );

      case OpportunityType.UNDER_25:
        return this.createDecision(
          TradingMarket.OVER_UNDER,
          TradingAction.BACK,
          TradingSelection.UNDER_25,
          opportunity
        );

      default:
        return {
          market: TradingMarket.MATCH_ODDS,
          action: TradingAction.NONE,
          selection: TradingSelection.NONE,
          confidence: 0,
          stake: StakeLevel.NONE,
          reasons: opportunity.reasons,
        };

    }

  }

  private createDecision(
    market: TradingMarket,
    action: TradingAction,
    selection: TradingSelection,
    opportunity: Opportunity
  ): TradingDecision {

    return {
      market,
      action,
      selection,
      confidence: opportunity.confidence,
      stake: this.calculateStake(opportunity.confidence),
      reasons: opportunity.reasons,
    };

  }

  private calculateStake(
    confidence: number
  ): StakeLevel {

    if (confidence >= 0.85) return StakeLevel.HIGH;

    if (confidence >= 0.70) return StakeLevel.MEDIUM;

    if (confidence >= 0.50) return StakeLevel.LOW;

    return StakeLevel.NONE;

  }

}
