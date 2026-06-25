import { PressureAnalysis } from "./pressure-analysis";

export interface MatchState {

  minute: number;

  pressureHome: PressureAnalysis;

  pressureAway: PressureAnalysis;

  gamePhase: string;

  dominantTeam: string | null;

  lastUpdated: Date;

}