export enum ThreatLevel {

  LOW = "LOW",

  MEDIUM = "MEDIUM",

  HIGH = "HIGH",

  CRITICAL = "CRITICAL",

}

export interface ThreatAnalysis {

  score: number;

  level: ThreatLevel;

  confidence: number;

  reasons: string[];

}