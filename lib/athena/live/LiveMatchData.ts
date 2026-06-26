import { Fixture } from "./Fixture";
import { MatchStatistics } from "./MatchStatistics";

import { MatchEvent } from "../models/match-event";

export interface LiveMatchData {

  fixture: Fixture;

  statistics: MatchStatistics | null;

  events: MatchEvent[];

}