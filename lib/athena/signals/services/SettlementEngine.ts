import { SignalRepository } from "../repositories/SignalRepository";
import { FootballServerFixtureClient } from "@/lib/athena/live/FootballServerFixtureClient";

export class SettlementEngine {

  private readonly repository =
    new SignalRepository();

  private readonly fixtureClient =
    new FootballServerFixtureClient();

  async settlePendingSignals() {

    console.log("SettlementEngine START");

    const signals =
      await this.repository.listPending();

    console.log("Pending signals:", signals.length);
    console.dir(signals, { depth: null });

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

      console.log(
        `Score: ${fixture.goals.home} x ${fixture.goals.away}`
      );

      if (fixture.fixture.status.short !== "FT") {

        console.log("Match not finished.");

        continue;

      }

      console.log("READY FOR SETTLEMENT");

    }

    console.log("SettlementEngine END");

  }

}
