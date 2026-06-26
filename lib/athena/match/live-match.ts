import { MatchSnapshot } from "../models/match-snapshot";
import { MatchEvent } from "../models/match-event";

export class LiveMatch {

  private snapshot: MatchSnapshot;

  constructor() {

    this.snapshot = {

      id: crypto.randomUUID(),

      minute: 0,

      homeTeam: "HOME",

      awayTeam: "AWAY",

      scoreHome: 0,

      scoreAway: 0,

      homeEvents: [],

      awayEvents: [],

      homePossession: 50,

      awayPossession: 50,

      homeShots: 0,

      awayShots: 0,

      homeShotsOnTarget: 0,

      awayShotsOnTarget: 0,

      homeCorners: 0,

      awayCorners: 0,

      homeYellowCards: 0,

      awayYellowCards: 0,

    };

  }

  addHomeEvent(event: MatchEvent) {

    this.snapshot.homeEvents.push(event);

    this.snapshot.minute = Math.max(
      this.snapshot.minute,
      event.minute
    );

  }

  addAwayEvent(event: MatchEvent) {

    this.snapshot.awayEvents.push(event);

    this.snapshot.minute = Math.max(
      this.snapshot.minute,
      event.minute
    );

  }

  snapshotState(): MatchSnapshot {

    return this.snapshot;

  }

}