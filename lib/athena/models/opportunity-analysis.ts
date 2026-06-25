export enum OpportunityType {
  NONE = "NONE",
  LAY_DRAW = "LAY_DRAW",
  BACK_HOME = "BACK_HOME",
  BACK_AWAY = "BACK_AWAY",
  OVER_15 = "OVER_15",
  OVER_25 = "OVER_25",
}

export interface OpportunityAnalysis {

  type: OpportunityType;

  confidence: number;

  reason: string[];

}