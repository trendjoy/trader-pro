import { SignalRepository } from "../repositories/SignalRepository";
import { SignalEvaluator } from "./SignalEvaluator";
import { FootballServerFixtureClient } from "@/lib/athena/live/FootballServerFixtureClient";

export class SettlementEngine {

  private readonly repository =
    new SignalRepository();

  private readonly evaluator =
    new SignalEvaluator();

  private readonly fixtureClient =
    new FootballServerFixtureClient();

  async settlePendingSignals() {

    console.log("SettlementEngine START");

    const signals =
      await this.repository.listPending();

    console.log(
      `Pending signals: ${signals.length}`
    );

    for (const signal of signals) {

      console.log("================================");

      console.log(
        `Checking Fixture ${signal.fixture_id}`
      );

      const fixture =
        await this.fixtureClient.getFixture(
          signal.fixture_id
        );

      if (!fixture) {

        console.log("Fixture not found");

        continue;

      }

      console.log(
        `Status: ${fixture.fixture.status.short}`
      );

      if (
        fixture.fixture.status.short !== "FT"
      ) {

        console.log("Match not finished.");

        continue;

      }

      const settlement =
        this.evaluator.evaluate(

          {

            fixtureId: signal.fixture_id,

            league: signal.league,

            home: signal.home,

            away: signal.away,

            minute: signal.minute,

            market: signal.market,

            action: signal.action,

            selection: signal.selection,

            confidence: signal.confidence,

            stake: signal.stake,

            odd: signal.odd,

            status: signal.status,

            result: signal.result,

            profit: signal.profit,

            analysis: signal.analysis,

          },

          fixture.goals.home,

          fixture.goals.away

        );

      console.log(
        "Settlement Result:"
      );

      console.dir(
        settlement,
        { depth: null }
      );

      await this.repository.updateSettlement(

        signal.id,

        settlement

      );

      console.log(
        "Signal settled."
      );

    }

    console.log(
      "SettlementEngine END"
    );

  }

}
