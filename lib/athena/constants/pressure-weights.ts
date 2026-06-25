import { EventType } from "../models/match-event";

export const PRESSURE_WEIGHTS: Record<EventType, number> = {

  [EventType.ATTACK]: 2,

  [EventType.DANGER_ATTACK]: 5,

  [EventType.SHOT]: 6,

  [EventType.SHOT_ON_TARGET]: 8,

  [EventType.CORNER]: 4,

  [EventType.GOAL]: 12,

  [EventType.YELLOW_CARD]: 0,

  [EventType.RED_CARD]: 0,

  [EventType.SUBSTITUTION]: 0,

};