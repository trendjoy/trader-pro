import { MatchSnapshot } from "../models/match-snapshot";
import { MatchEvent, EventType } from "../models/match-event";
import { AttackWave } from "../models/attack-wave";
import { TeamSide } from "../types/team-side";

export class AttackWaveEngine {

  analyze(
    snapshot: MatchSnapshot
  ): AttackWave {

    const events = [

      ...snapshot.homeEvents,

      ...snapshot.awayEvents,

    ].sort((a, b) => a.minute - b.minute);

    const recent = events.filter(
      event => snapshot.minute - event.minute <= 10
    );

    let homeScore = 0;
    let awayScore = 0;

    let homeEvents = 0;
    let awayEvents = 0;

    for (const event of recent) {

      const value = this.weight(event.type);

      if (event.team === TeamSide.HOME) {

        homeScore += value;
        homeEvents++;

      } else {

        awayScore += value;
        awayEvents++;

      }

    }

    if (homeScore === 0 && awayScore === 0) {

      return {

        team: null,

        score: 0,

        level: "LOW",

        consecutiveEvents: 0,

        startedAtMinute: snapshot.minute,

        lastEventMinute: snapshot.minute,

      };

    }

    const homeDominates =
      homeScore >= awayScore;

    const score =
      homeDominates
        ? homeScore
        : awayScore;

    return {

      team:
        homeDominates
          ? TeamSide.HOME
          : TeamSide.AWAY,

      score,

      level:
        this.level(score),

      consecutiveEvents:
        homeDominates
          ? homeEvents
          : awayEvents,

      startedAtMinute:
        snapshot.minute - 10,

      lastEventMinute:
        snapshot.minute,

    };

  }

  private weight(
    type: EventType
  ): number {

    switch (type) {

      case EventType.GOAL:
        return 20;

      case EventType.SHOT_ON_TARGET:
        return 8;

      case EventType.SHOT:
        return 5;

      case EventType.CORNER:
        return 4;

      case EventType.ATTACK:
        return 2;

      case EventType.DANGER_ATTACK:
        return 3;

      default:
        return 1;

    }

  }

  private level(
    score: number
  ) {

    if (score >= 40) {

      return "EXTREME";

    }

    if (score >= 25) {

      return "HIGH";

    }

    if (score >= 10) {

      return "MEDIUM";

    }

    return "LOW";

  }

}