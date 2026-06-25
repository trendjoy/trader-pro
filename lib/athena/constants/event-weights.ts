import { EventType } from "../models/match-event";

export const EVENT_WEIGHTS: Record<EventType, number> = {
  [EventType.ATTACK]: 5,
  [EventType.DANGER_ATTACK]: 10,
  [EventType.SHOT]: 12,
  [EventType.SHOT_ON_TARGET]: 20,
  [EventType.CORNER]: 8,
  [EventType.GOAL]: 40,
  [EventType.YELLOW_CARD]: 0,
  [EventType.RED_CARD]: 0,
  [EventType.SUBSTITUTION]: 0,
};