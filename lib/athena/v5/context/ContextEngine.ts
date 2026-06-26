import { MatchContext } from "../models/MatchContext";

export class ContextEngine{

  analyze(snapshot:any):MatchContext{

    const minute =
      snapshot.minute ?? 0;

    const home =
      snapshot.scoreHome ?? 0;

    const away =
      snapshot.scoreAway ?? 0;

    const phase =

      minute < 15

        ? "OPENING"

        : minute < 45

        ? "FIRST_HALF"

        : minute < 75

        ? "SECOND_HALF"

        : "FINAL";

    const scoreState =

      home === away

        ? "DRAW"

        : home > away

        ? "HOME_WINNING"

        : "AWAY_WINNING";

    let urgency:"LOW"|"MEDIUM"|"HIGH" = "LOW";

    if (phase === "FINAL" && scoreState === "DRAW") {

      urgency = "HIGH";

    } else if (phase === "SECOND_HALF") {

      urgency = "MEDIUM";

    }

    let tempo:"SLOW"|"NORMAL"|"FAST" = "NORMAL";

    const totalShots =
      (snapshot.homeShots ?? 0) +
      (snapshot.awayShots ?? 0);

    if (totalShots >= 20) {

      tempo = "FAST";

    } else if (totalShots <= 8) {

      tempo = "SLOW";

    }

    return {

      phase,

      scoreState,

      urgency,

      tempo,

    };

  }

}
