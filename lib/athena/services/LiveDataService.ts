import { FootballProvider } from "../live/FootballProvider";
import { FootballEventsClient } from "../live/FootballEventsClient";
import { FootballStatisticsClient } from "../live/FootballStatisticsClient";
import { FootballStatisticsMapper } from "../live/FootballStatisticsMapper";
import { MatchEventMapper } from "../live/MatchEventMapper";

import { LiveMatchData } from "../live/LiveMatchData";

export class LiveDataService {

  private readonly provider =
    new FootballProvider();

  private readonly statisticsClient =
    new FootballStatisticsClient();

  private readonly statisticsMapper =
    new FootballStatisticsMapper();

  private readonly eventsClient =
    new FootballEventsClient();

  private readonly eventMapper =
    new MatchEventMapper();

  async loadFixtures() {

    return this.provider.getTodayFixtures();

  }

  async loadMatch(
    fixtureId: number
  ): Promise<LiveMatchData | null> {

    console.log("================================");
    console.log("ATHENA LOAD MATCH");
    console.log("Fixture ID:", fixtureId);

    const fixtures =
      await this.provider.getTodayFixtures();

    const fixture =
      fixtures.find(
        f => f.id === fixtureId
      );

    if (!fixture) {

      console.error(
        "Fixture não encontrada."
      );

      return null;

    }

    console.log(
      "Fixture:",
      fixture.home.name,
      "x",
      fixture.away.name
    );

    let statistics = null;

    let events = [];

    try {

      const statisticsJson =
        await this.statisticsClient.getStatistics(
          fixtureId
        );

      console.log(
        "Statistics API:",
        statisticsJson.response
      );

      if (
        statisticsJson.response &&
        statisticsJson.response.length >= 2
      ) {

        statistics =
          this.statisticsMapper.map(
            statisticsJson
          );

        console.log(
          "Statistics Mapper:",
          statistics
        );

      }

    } catch (error) {

      console.error(
        "Erro estatísticas:",
        error
      );

    }

    try {

      const eventsJson =
        await this.eventsClient.getEvents(
          fixtureId
        );

      console.log(
        "Eventos API:",
        eventsJson.response
      );

      events =
        this.eventMapper.map(
          fixture,
          eventsJson.response ?? []
        );

      console.log(
        "Eventos Mapper:",
        events
      );

    } catch (error) {

      console.error(
        "Erro eventos:",
        error
      );

    }

   alert(
  `Fixture: ${fixture.home.name} x ${fixture.away.name}
Eventos: ${events.length}`
);
    console.log("================================");

    return {

      fixture,

      statistics,

      events,

    };

  }

}