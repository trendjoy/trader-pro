import { EventType, MatchEvent } from "../models/match-event";
import { TeamSide } from "../types/team-side";

export class EventGenerator {

    private readonly eventPool: EventType[] = [

        EventType.ATTACK,

        EventType.DANGER_ATTACK,

        EventType.SHOT,

        EventType.SHOT_ON_TARGET,

        EventType.CORNER,

        EventType.GOAL,

        EventType.YELLOW_CARD,

        EventType.RED_CARD,

        EventType.SUBSTITUTION

    ];

    generate(
        minute: number,
        second: number
    ): MatchEvent | null {

        const probability = Math.random();

        if (probability < 0.65) {

            return null;

        }

        const team: TeamSide =

            Math.random() > 0.5

                ? TeamSide.HOME

                : TeamSide.AWAY;

        const type =

            this.eventPool[
                Math.floor(
                    Math.random() * this.eventPool.length
                )
            ];

        return {

            id: crypto.randomUUID(),

            minute,

            second,

            team,

            type

        };

    }

}