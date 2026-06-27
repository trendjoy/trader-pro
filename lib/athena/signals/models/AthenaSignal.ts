export interface AthenaSignal {

  id: string;

  fixtureId: number;

  league: string;

  home: string;

  away: string;

  date: string;

  minute: number;

  action: string;

  market: string;

  confidence: number;

  reason: string[];

  insight: string;

  status: "PENDING" | "GREEN" | "RED";

  odd: number;

  profit: number;

  createdAt: string;

}
