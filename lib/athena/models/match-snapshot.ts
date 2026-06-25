import { MatchEvent } from "./match-event";

export interface MatchSnapshot {

  id: string;

  homeTeam: string;

  awayTeam: string;

  minute: number;

  scoreHome: number;

  scoreAway: number;

  homeEvents: MatchEvent[];

  awayEvents: MatchEvent[];

}