import { TeamSide } from "../types/team-side";

export enum DominanceLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export interface DominanceAnalysis {

  team: TeamSide | null;

  score: number;

  level: DominanceLevel;

  confidence: number;

}