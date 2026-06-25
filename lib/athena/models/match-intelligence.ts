import { PressureAnalysis } from "./pressure-analysis";
import { TeamSide } from "../types/team-side";

export interface MatchIntelligence {

  minute: number;

  homePressure: PressureAnalysis;

  awayPressure: PressureAnalysis;

  dominantTeam: TeamSide | null;

  confidence: number;

}