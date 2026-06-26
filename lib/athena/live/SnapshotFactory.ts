import { LiveMatchData } from "./LiveMatchData";

import { MatchSnapshot } from "../models/match-snapshot";

import { TeamSide } from "../types/team-side";

export class SnapshotFactory {

  create(
    data: LiveMatchData
  ): MatchSnapshot {

    console.log("===== LIVE DATA =====");
console.dir(data,{depth:null});

console.log("===== RAW STATISTICS =====");
console.dir(data.statistics,{depth:null});

return {

      id: String(data.fixture.id),

      minute: data.fixture.status.minute,

      homeTeam: data.fixture.home.name,

      awayTeam: data.fixture.away.name,

      scoreHome: data.fixture.score.home,

      scoreAway: data.fixture.score.away,

      homeEvents:

        data.events.filter(

          e => e.team === TeamSide.HOME

        ),

      awayEvents:

        data.events.filter(

          e => e.team === TeamSide.AWAY

        ),

      homePossession:
        data.statistics?.homePossession ?? 50,

      awayPossession:
        data.statistics?.awayPossession ?? 50,

      homeShots:
        data.statistics?.homeShots ?? 0,

      awayShots:
        data.statistics?.awayShots ?? 0,

      homeShotsOnTarget:
        data.statistics?.homeShotsOnTarget ?? 0,

      awayShotsOnTarget:
        data.statistics?.awayShotsOnTarget ?? 0,

      homeCorners:
        data.statistics?.homeCorners ?? 0,

      awayCorners:
        data.statistics?.awayCorners ?? 0,

      homeYellowCards:
        data.statistics?.homeYellowCards ?? 0,

      awayYellowCards:
        data.statistics?.awayYellowCards ?? 0,

    };

  }

}