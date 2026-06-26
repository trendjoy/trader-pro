import { Fixture } from "../../live/Fixture";

import { LiveDataService } from "../../services/LiveDataService";

import { SnapshotFactory } from "../../live/SnapshotFactory";

import { AthenaPipeline } from "../core/AthenaPipeline";

import { MatchAnalysis } from "../models/MatchAnalysis";

export class LiveAnalysisController {

  private readonly liveData =
    new LiveDataService();

  private readonly snapshotFactory =
    new SnapshotFactory();

  private readonly pipeline =
    new AthenaPipeline();

  async loadFixtures(): Promise<Fixture[]> {

    return this.liveData.loadFixtures();

  }

  async refreshFixture(
    fixtureId: number
  ): Promise<Fixture | null> {

    const fixtures =
      await this.liveData.loadFixtures();

    return (

      fixtures.find(

        fixture =>
          fixture.id === fixtureId

      ) ?? null

    );

  }

  async analyzeFixture(
    fixture: Fixture
  ): Promise<MatchAnalysis> {

    const liveMatch =

      await this.liveData.loadMatch(
        fixture.id
      );

    if (!liveMatch) {

      throw new Error(
        "Partida não encontrada."
      );

    }

    const snapshot =

      this.snapshotFactory.create(
        liveMatch
      );

    return this.pipeline.analyze(
      snapshot
    );

  }

}