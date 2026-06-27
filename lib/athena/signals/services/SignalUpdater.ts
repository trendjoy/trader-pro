import { SignalRepository } from "../repository/SignalRepository";
import { SignalEvaluator } from "./SignalEvaluator";

export class SignalUpdater {

  private readonly repository =
    new SignalRepository();

  private readonly evaluator =
    new SignalEvaluator();

  updateMatch(
    fixtureId: number,
    homeGoals: number,
    awayGoals: number
  ) {

    const signals =
      this.repository.load();

    const matchSignals =
      signals.filter(

        signal =>

          signal.fixtureId === fixtureId &&

          signal.status === "PENDING"

      );

    for (const signal of matchSignals) {

      const updated =
        this.evaluator.evaluate(
          signal,
          homeGoals,
          awayGoals
        );

      this.repository.update(
        updated
      );

    }

  }

}
