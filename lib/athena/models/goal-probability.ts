import { TeamSide } from "../types/team-side";

export interface GoalProbability {

  home: number;

  away: number;

  nextGoal: TeamSide | null;

  confidence: number;

}