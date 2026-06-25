import { MatchEvent } from "./match-event";

export interface OffensiveSequence {

    teamId: string;

    startMinute: number;

    endMinute: number;

    duration: number;

    events: MatchEvent[];

    intensity: number;

}