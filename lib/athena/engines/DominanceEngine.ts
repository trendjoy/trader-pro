import { MatchSnapshot } from "../models/match-snapshot";
import { Dominance } from "../models/dominance";

export class DominanceEngine {

  analyze(
    snapshot: MatchSnapshot
  ): Dominance {

    const home =

      snapshot.homePossession * 0.20 +

      snapshot.homeShots * 4 +

      snapshot.homeShotsOnTarget * 8 +

      snapshot.homeCorners * 3;

    const away =

      snapshot.awayPossession * 0.20 +

      snapshot.awayShots * 4 +

      snapshot.awayShotsOnTarget * 8 +

      snapshot.awayCorners * 3;

    let dominant:

      | "HOME"

      | "AWAY"

      | "NONE" = "NONE";

    if (home > away) {

      dominant = "HOME";

    } else if (away > home) {

      dominant = "AWAY";

    }

    const difference =
      Math.abs(home - away);

    return {

      home,

      away,

      dominant,

      confidence:

        Math.min(

          100,

          difference

        ),

    };

  }

}