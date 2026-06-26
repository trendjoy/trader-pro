import { Fixture } from "./Fixture";

import {
  MatchEvent,
  EventType,
} from "../models/match-event";

import { TeamSide } from "../types/team-side";

export class MatchEventMapper {

  map(
    fixture: Fixture,
    events: any[]
  ): MatchEvent[] {

    return events.map(event => ({

      id: crypto.randomUUID(),

      minute: event.time?.elapsed ?? 0,

      second: event.time?.extra ?? 0,

      team:
        event.team?.id === fixture.home.id
          ? TeamSide.HOME
          : TeamSide.AWAY,

      type: this.mapType(
        event.type,
        event.detail
      ),

    }));

  }

  private mapType(
    type: string,
    detail?: string
  ): EventType {

    switch (type) {

      case "Goal":
        return EventType.GOAL;

      case "subst":
        return EventType.SUBSTITUTION;

      case "Card":

        if (
          detail?.toLowerCase().includes("red")
        ) {

          return EventType.RED_CARD;

        }

        return EventType.YELLOW_CARD;

      default:

        return EventType.ATTACK;

    }

  }

}