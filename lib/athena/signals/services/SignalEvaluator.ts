import { Signal } from "../models/Signal";

export class SignalEvaluator {

  evaluate(
    signal: Signal,
    homeGoals: number,
    awayGoals: number
  ) {

    let result = "VOID";
    let profit = 0;

    switch (signal.market) {

      case "MATCH_ODDS":

        if (signal.selection === "HOME") {

          if (homeGoals > awayGoals) {

            result = "GREEN";
            profit = signal.odd
              ? signal.odd - 1
              : 1;

          } else {

            result = "RED";
            profit = -signal.stake;

          }

        }

        if (signal.selection === "AWAY") {

          if (awayGoals > homeGoals) {

            result = "GREEN";
            profit = signal.odd
              ? signal.odd - 1
              : 1;

          } else {

            result = "RED";
            profit = -signal.stake;

          }

        }

        if (signal.selection === "DRAW") {

          if (homeGoals === awayGoals) {

            result = "GREEN";
            profit = signal.odd
              ? signal.odd - 1
              : 1;

          } else {

            result = "RED";
            profit = -signal.stake;

          }

        }

        break;

    }

    return {

      result,

      profit,

      status: result,

      final_score_home: homeGoals,

      final_score_away: awayGoals,

    };

  }

}
