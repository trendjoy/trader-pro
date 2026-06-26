import { PressureAnalysis } from "./pressure-analysis";
import { MomentumAnalysis } from "./momentum-analysis";
import { GoalProbability } from "./goal-probability";

import { TeamSide } from "../types/team-side";

export interface MatchIntelligence {

  minute: number;

  homePressure: PressureAnalysis;

  awayPressure: PressureAnalysis;

  homeMomentum: MomentumAnalysis;

  awayMomentum: MomentumAnalysis;

  goalProbability: GoalProbability;

  dominantTeam: TeamSide | null;

  confidence: number;

}