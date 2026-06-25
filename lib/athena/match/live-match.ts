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

      awayEvents: []

    };

  }

  loadSnapshot(snapshot: MatchSnapshot) {

    this.snapshot = snapshot;

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