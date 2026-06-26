import { FootballProvider } from "../live/FootballProvider";
import { FootballStatisticsClient } from "../live/FootballStatisticsClient";
import { FootballStatisticsMapper } from "../live/FootballStatisticsMapper";

import { Fixture } from "../live/Fixture";
import { FixtureSnapshotMapper } from "../live/FixtureSnapshotMapper";

import { AthenaPipeline } from "../core/AthenaPipeline";

import { MatchSnapshot } from "../models/match-snapshot";

export class LiveAnalysisController {

  private readonly provider = new FootballProvider();

  private readonly statisticsClient =
    new FootballStatisticsClient();

  private readonly statisticsMapper =
    new FootballStatisticsMapper();

  private readonly snapshotMapper =
    new FixtureSnapshotMapper();

  private readonly pipeline =
    new AthenaPipeline();

  async loadFixtures(): Promise<Fixture[]> {

    return this.provider.getTodayFixtures();

  }

  async refreshFixture(
    fixtureId: number
  ): Promise<Fixture | null> {

    const fixtures =
      await this.provider.getTodayFixtures();

    return fixtures.find(
      f => f.id === fixtureId
    ) ?? null;

  }

  async analyzeFixture(
    fixture: Fixture
  ) {

    let statistics;

    try {

      const json =
        await this.statisticsClient.getStatistics(
          fixture.id
        );

      if (
        json.response &&
        json.response.length >= 2
      ) {

        statistics =
          this.statisticsMapper.map(json);

      }

    } catch (error) {

      console.warn(
        "Statistics unavailable",
        error
      );

    }

    const snapshot: MatchSnapshot =
      this.snapshotMapper.map(
        fixture,
        statistics
      );

    return {

      snapshot,

      ...this.pipeline.analyze(snapshot),

    };

  }

}