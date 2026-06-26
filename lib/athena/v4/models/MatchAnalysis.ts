import { ThreatLevel } from "./ThreatAnalysis";

export interface TeamAnalysis {

  pressure: number;

  pressureLevel:
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "EXTREME";

  momentum: number;

  momentumLevel:
    | "STABLE"
    | "BUILDING"
    | "STRONG"
    | "EXPLOSIVE";

  threat: number;

  threatLevel: ThreatLevel;

}

export interface GoalAnalysis {

  probability: number;

  expectedSide:
    | "HOME"
    | "AWAY"
    | "NONE";

}

export interface OpportunityAnalysis {

  type: string;

  confidence: number;

  reasons: string[];

}

export interface TradingAnalysis {

  market: string;

  action: string;

  selection: string;

  confidence: number;

  stake: string;

}

export interface MatchAnalysis {

  minute: number;

  home: TeamAnalysis;

  away: TeamAnalysis;

  dominantSide:
    | "HOME"
    | "AWAY"
    | "NONE";

  goal: GoalAnalysis;

  opportunity: OpportunityAnalysis;

  trading: TradingAnalysis;

}