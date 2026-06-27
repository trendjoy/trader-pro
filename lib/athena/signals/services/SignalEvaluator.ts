import { AthenaSignal } from "../models/AthenaSignal";

export class SignalEvaluator {

  evaluate(
    signal: AthenaSignal,
    homeGoals: number,
    awayGoals: number
  ): AthenaSignal {

    if (signal.status !== "PENDING") {

      return signal;

    }

    const totalGoals =
      homeGoals + awayGoals;

    let green = false;

    switch (signal.market) {

      case "OVER_05":

        green =
          totalGoals >= 1;

        break;

      case "LAY_DRAW":

        green =
          homeGoals !== awayGoals;

        break;

      default:

        return signal;

    }

    return {

      ...signal,

      status:
        green
          ? "GREEN"
          : "RED",

      profit:
        green
          ? 1
          : -1,

    };

  }

}
