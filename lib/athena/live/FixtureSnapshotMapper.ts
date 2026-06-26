import { Fixture } from "./Fixture";
import { MatchStatistics } from "./MatchStatistics";

import { MatchSnapshot } from "../models/match-snapshot";

export class FixtureSnapshotMapper {

  map(
    fixture: Fixture,
    statistics?: MatchStatistics
  ): MatchSnapshot {

    return {

      id: String(fixture.id),

      minute: fixture.status.minute,

      homeTeam: fixture.home.name,

      awayTeam: fixture.away.name,

      scoreHome: fixture.score.home,

      scoreAway: fixture.score.away,

      homeEvents: [],

      awayEvents: [],

      homePossession:
        statistics?.homePossession ?? 50,

      awayPossession:
        statistics?.awayPossession ?? 50,

      homeShots:
        statistics?.homeShots ?? 0,

      awayShots:
        statistics?.awayShots ?? 0,

      homeShotsOnTarget:
        statistics?.homeShotsOnTarget ?? 0,

      awayShotsOnTarget:
        statistics?.awayShotsOnTarget ?? 0,

      homeCorners:
        statistics?.homeCorners ?? 0,

      awayCorners:
        statistics?.awayCorners ?? 0,

      homeYellowCards:
        statistics?.homeYellowCards ?? 0,

      awayYellowCards:
        statistics?.awayYellowCards ?? 0,

    };

  }

}