import { MatchSnapshot } from "../../models/match-snapshot";

import {
  MatchState,
  TeamMetrics,
} from "../models/MatchState";

export class MatchStateAnalyzer {

  analyze(
    snapshot: MatchSnapshot
  ): MatchState {

    const home: TeamMetrics = {

      possession:
        snapshot.homePossession,

      shots:
        snapshot.homeShots,

      shotsOnTarget:
        snapshot.homeShotsOnTarget,

      corners:
        snapshot.homeCorners,

      yellowCards:
        snapshot.homeYellowCards,

      score:
        snapshot.scoreHome,

    };

    const away: TeamMetrics = {

      possession:
        snapshot.awayPossession,

      shots:
        snapshot.awayShots,

      shotsOnTarget:
        snapshot.awayShotsOnTarget,

      corners:
        snapshot.awayCorners,

      yellowCards:
        snapshot.awayYellowCards,

      score:
        snapshot.scoreAway,

    };

    const scoreDifference =
      home.score -
      away.score;

    const possessionDifference =
      home.possession -
      away.possession;

    const shotsDifference =
      home.shots -
      away.shots;

    const shotsOnTargetDifference =
      home.shotsOnTarget -
      away.shotsOnTarget;

    const cornersDifference =
      home.corners -
      away.corners;

    let dominantSide:
      "HOME" |
      "AWAY" |
      "NONE" = "NONE";

    const homeStrength =

      home.possession * 0.35 +

      home.shots * 8 +

      home.shotsOnTarget * 15 +

      home.corners * 5 -

      home.yellowCards * 2 +

      home.score * 20;

    const awayStrength =

      away.possession * 0.35 +

      away.shots * 8 +

      away.shotsOnTarget * 15 +

      away.corners * 5 -

      away.yellowCards * 2 +

      away.score * 20;

    if (
      homeStrength >
      awayStrength + 10
    ) {

      dominantSide = "HOME";

    } else if (
      awayStrength >
      homeStrength + 10
    ) {

      dominantSide = "AWAY";

    }

    return {

      snapshot,

      minute:
        snapshot.minute,

      home,

      away,

      scoreDifference,

      possessionDifference,

      shotsDifference,

      shotsOnTargetDifference,

      cornersDifference,

      dominantSide,

    };

  }

}
