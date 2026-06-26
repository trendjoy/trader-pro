import { TeamSide } from "../types/team-side";

export type AttackWaveLevel =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "EXTREME";

export interface AttackWave {

  team: TeamSide | null;

  score: number;

  level: AttackWaveLevel;

  consecutiveEvents: number;

  startedAtMinute: number;

  lastEventMinute: number;

}