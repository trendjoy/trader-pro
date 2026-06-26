export interface AthenaBrainResult {

  version: string;

  timestamp: string;

  match: {

    id: number;

    home: string;

    away: string;

    homeScore: number;

    awayScore: number;

    minute: number;

    status: string;

  };

  context: {

    phase: string;

    scoreState: string;

    urgency: string;

    tempo: string;

  };

  metrics: {

    pressure: {

      home: number;

      away: number;

    };

    momentum: {

      home: number;

      away: number;

    };

    threat: {

      home: number;

      away: number;

    };

    dominance: {

      side: string;

      value: number;

    };

  };

  intelligence: {

    heat: {

      score: number;

      level: string;

      color: string;

    };

    confidence: {

      score: number;

      level: string;

    };

    prediction: {

      probability: number;

      expectedSide: string;

      window: string;

    };

    decision: {

      action: string;

      confidence: number;

      reason: string;

    };

    coach: {

      summary: string;

      reasons: string[];

    };

  };

}
