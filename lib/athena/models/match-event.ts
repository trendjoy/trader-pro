import { TeamSide } from "../types/team-side";

export enum EventType {
  ATTACK = "ATTACK",
  DANGER_ATTACK = "DANGER_ATTACK",
  SHOT = "SHOT",
  SHOT_ON_TARGET = "SHOT_ON_TARGET",
  CORNER = "CORNER",
  GOAL = "GOAL",
  YELLOW_CARD = "YELLOW_CARD",
  RED_CARD = "RED_CARD",
  SUBSTITUTION = "SUBSTITUTION",
}

export interface MatchEvent {
  id: string;
  minute: number;
  second: number;
  team: TeamSide;
  type: EventType;
}