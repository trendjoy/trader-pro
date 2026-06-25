import { FixtureLeague } from "./FixtureLeague";
import { FixtureScore } from "./FixtureScore";
import { FixtureStatus } from "./FixtureStatus";
import { FixtureTeam } from "./FixtureTeam";
import { FixtureVenue } from "./FixtureVenue";

export interface Fixture {

  id: number;

  date: string;

  timestamp: number;

  home: FixtureTeam;

  away: FixtureTeam;

  score: FixtureScore;

  league: FixtureLeague;

  venue: FixtureVenue;

  status: FixtureStatus;

}