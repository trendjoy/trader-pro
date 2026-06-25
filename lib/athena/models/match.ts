import { MatchEvent } from "./match-event";
import { MatchState } from "./match-state";

export interface Match {

  id: string;

  homeTeamId: string;

  awayTeamId: string;

  minute: number;

  scoreHome: number;

  scoreAway: number;

  events: MatchEvent[];

  state: MatchState;

}