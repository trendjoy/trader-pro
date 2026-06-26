import { ThreatLevel } from "./ThreatAnalysis";

export interface ThreatResult {

  home: {

    score: number;

    level: ThreatLevel;

  };

  away: {

    score: number;

    level: ThreatLevel;

  };

  dominantSide: "HOME" | "AWAY" | "NONE";

  confidence: number;

  reasons: string[];

}