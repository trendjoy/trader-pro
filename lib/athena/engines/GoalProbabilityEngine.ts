import { MatchSnapshot } from "../models/match-snapshot";
import { GoalProbability } from "../models/goal-probability";

import { TeamSide } from "../types/team-side";

export class GoalProbabilityEngine {

  analyze(
    snapshot: MatchSnapshot
  ): GoalProbability {

    const homeScore =

      snapshot.homePossession * 0.20 +

      snapshot.homeShots * 3 +

      snapshot.homeShotsOnTarget * 6 +

      snapshot.homeCorners * 2 +

      snapshot.homeEvents.length * 2;

    const awayScore =

      snapshot.awayPossession * 0.20 +

      snapshot.awayShots * 3 +

      snapshot.awayShotsOnTarget * 6 +

      snapshot.awayCorners * 2 +

      snapshot.awayEvents.length * 2;

    const total = Math.max(
      homeScore + awayScore,
      1
    );

    const home = Math.round(
      homeScore / total * 100
    );

    const away = Math.round(
      awayScore / total * 100
    );

    let nextGoal: TeamSide | null =
      null;

    if (home > away) {

      nextGoal = TeamSide.HOME;

    }

    if (away > home) {

      nextGoal = TeamSide.AWAY;

    }

    return {

      home,

      away,

      nextGoal,

      confidence:
        Math.abs(home - away),

    };

  }

}