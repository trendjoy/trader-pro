import { PressureAnalysis } from "./pressure-analysis";
import { MomentumAnalysis } from "./momentum-analysis";
import { TeamSide } from "../types/team-side";

export interface MatchIntelligence {

  minute: number;

  homePressure: PressureAnalysis;

  awayPressure: PressureAnalysis;

  homeMomentum: MomentumAnalysis;

  awayMomentum: MomentumAnalysis;

  dominantTeam: TeamSide | null;

  confidence: number;

}