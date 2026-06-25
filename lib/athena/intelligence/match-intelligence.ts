import { PressureAnalysis } from "../models/pressure-analysis";

export interface MatchIntelligence {

  minute: number;

  home: {

    pressure: PressureAnalysis;

  };

  away: {

    pressure: PressureAnalysis;

  };

  dominantTeam: "HOME" | "AWAY" | null;

  confidence: number;

}