import { AthenaBrainResult } from "../models/AthenaBrainResult";

import { ContextEngine } from "../context/ContextEngine";
import { HeatEngine } from "./HeatEngine";
import { SignalEngine } from "./SignalEngine";
import { PredictionEngine } from "./PredictionEngine";
import { CoachEngine } from "./CoachEngine";

export class AthenaBrain {

  private readonly contextEngine =
    new ContextEngine();

  private readonly heatEngine =
    new HeatEngine();

  private readonly signalEngine =
    new SignalEngine();

  private readonly predictionEngine =
    new PredictionEngine();

  private readonly coachEngine =
    new CoachEngine();

  analyze(
    snapshot:any,
  ):AthenaBrainResult{

    const context =
      this.contextEngine.analyze(snapshot);

    const heat =
      this.heatEngine.calculate(
        context,
        snapshot,
      );

    const signal =
      this.signalEngine.calculate(
        heat.score,
      );

    const prediction =
      this.predictionEngine.calculate(
        heat.score,
        snapshot,
      );

    const coach =
      this.coachEngine.calculate(
        context,
        heat.score,
      );

    return{

      match:{

        id:
          Number(snapshot.id ?? 0),

        home:
          snapshot.homeName ?? "",

        away:
          snapshot.awayName ?? "",

        homeScore:
          snapshot.scoreHome ?? 0,

        awayScore:
          snapshot.scoreAway ?? 0,

        minute:
          snapshot.minute ?? 0,

        status:
          snapshot.status ?? "LIVE",

      },

      heat,

      signal,

      prediction,

      coach,

    };

  }

}
