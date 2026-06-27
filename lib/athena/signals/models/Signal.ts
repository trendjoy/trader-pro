export interface Signal {

  id: string;

  fixtureId: number;

  date: string;

  league: string;

  home: string;

  away: string;

  minute: number;

  method: string;

  market: string;

  confidence: number;

  odd: number;

  stake: number;

  status: "PENDING" | "GREEN" | "RED";

  result?: string;

  createdAt: string;

}
