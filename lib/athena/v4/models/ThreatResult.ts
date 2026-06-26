import { ThreatLevel } from "./ThreatAnalysis";

export interface TeamThreat {

  score: number;

  level: ThreatLevel;

}

export interface ThreatResult {

  home: TeamThreat;

  away: TeamThreat;

  dominantSide:
    | "HOME"
    | "AWAY"
    | "NONE";

  confidence: number;

  reasons: string[];

}