import { MatchSnapshot } from "../../models/match-snapshot";

export interface TeamMetrics {

  possession: number;

  shots: number;

  shotsOnTarget: number;

  corners: number;

  yellowCards: number;

  score: number;

}

export interface MatchState {

  snapshot: MatchSnapshot;

  minute: number;

  home: TeamMetrics;

  away: TeamMetrics;

  scoreDifference: number;

  possessionDifference: number;

  shotsDifference: number;

  shotsOnTargetDifference: number;

  cornersDifference: number;

  dominantSide: "HOME" | "AWAY" | "NONE";

}