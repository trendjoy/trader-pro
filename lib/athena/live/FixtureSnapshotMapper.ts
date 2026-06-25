import { Fixture } from "./Fixture";
import { MatchSnapshot } from "../models/match-snapshot";

export class FixtureSnapshotMapper {

  map(fixture: Fixture): MatchSnapshot {

    return {

      id: String(fixture.id),

      minute: fixture.status.minute,

      homeTeam: fixture.home.name,

      awayTeam: fixture.away.name,

      scoreHome: fixture.score.home,

      scoreAway: fixture.score.away,

      homeEvents: [],

      awayEvents: [],

    };

  }

}