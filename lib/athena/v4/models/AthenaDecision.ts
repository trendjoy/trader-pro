import { DecisionAction } from "../decision/Decision";

export interface AthenaDecision {

  action: DecisionAction;

  market: string;

  confidence: number;

  reason: string;

  dominantSide: "HOME" | "AWAY" | "NONE";

  pressure: number;

  momentum: number;

  threat: number;

  goalProbability: number;

}
