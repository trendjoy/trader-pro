import { LiveMatch } from "../match/live-match";
import { MatchEvent, EventType } from "../models/match-event";
import { TeamSide } from "../types/team-side";

export class MatchSimulator {

  private match = new LiveMatch();

  private minute = 60;

  private running = false;

  start(): void {
    this.running = true;
  }

  stop(): void {
    this.running = false;
  }

  reset(): void {
    this.match = new LiveMatch();
    this.minute = 60;
    this.running = false;
  }

  tick(): void {

    if (!this.running) return;

    this.minute++;

    const event: MatchEvent = {

      id: crypto.randomUUID(),

      minute: this.minute,

      second: Math.floor(Math.random() * 60),

      team:
        Math.random() > 0.35
          ? TeamSide.HOME
          : TeamSide.AWAY,

      type: this.randomEvent(),

    };

    if (event.team === TeamSide.HOME) {
      this.match.addHomeEvent(event);
    } else {
      this.match.addAwayEvent(event);
    }

  }

  getMatch(): LiveMatch {
    return this.match;
  }

  getClock(): string {

    return `${this.minute}'`;

  }

  private randomEvent(): EventType {

    const events = [

      EventType.ATTACK,

      EventType.DANGER_ATTACK,

      EventType.CORNER,

      EventType.SHOT,

      EventType.SHOT_ON_TARGET,

    ];

    return events[
      Math.floor(Math.random() * events.length)
    ];

  }

}
