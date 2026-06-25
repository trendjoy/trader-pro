export enum PressureLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
}

export interface PressureAnalysis {
  score: number;
  level: PressureLevel;
  confidence: number;
}