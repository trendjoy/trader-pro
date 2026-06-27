import { describe, expect, it } from "vitest";

import { PressureEngine, PressureLevel } from "../../lib/athena/v4/engines/PressureEngine";
import { MatchState } from "../../lib/athena/v4/models/MatchState";

describe("PressureEngine", () => {

  it("should detect home dominance under high pressure", () => {

    const state: MatchState = {

      snapshot: {
        id: "match-001",
        minute: 75,
        homeTeam: "Home",
        awayTeam: "Away",

        scoreHome: 1,
        scoreAway: 0,

        homeEvents: [],
        awayEvents: [],

        homePossession: 68,
        awayPossession: 32,

        homeShots: 16,
        awayShots: 3,

        homeShotsOnTarget: 8,
        awayShotsOnTarget: 1,

        homeCorners: 9,
        awayCorners: 1,

        homeYellowCards: 1,
        awayYellowCards: 2
      },

      minute: 75,

      home: {
        possession: 68,
        shots: 16,
        shotsOnTarget: 8,
        corners: 9,
        yellowCards: 1,
        score: 1
      },

      away: {
        possession: 32,
        shots: 3,
        shotsOnTarget: 1,
        corners: 1,
        yellowCards: 2,
        score: 0
      },

      scoreDifference: 1,
      possessionDifference: 36,
      shotsDifference: 13,
      shotsOnTargetDifference: 7,
      cornersDifference: 8,
      dominantSide: "HOME"

    };

    const engine = new PressureEngine();

    const result = engine.analyze(state);

    expect(result.dominantSide).toBe("HOME");

    expect(result.home.score).toBeGreaterThan(result.away.score);

    expect(result.home.level).toBe(PressureLevel.EXTREME);

    expect(result.home.score).toBeLessThanOrEqual(100);

    expect(result.away.score).toBeGreaterThanOrEqual(0);

  });

});
