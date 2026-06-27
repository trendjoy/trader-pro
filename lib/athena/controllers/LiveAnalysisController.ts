import { Fixture } from "../live/Fixture";

import { LiveDataService } from "../services/LiveDataService";
import { SnapshotFactory } from "../live/SnapshotFactory";

import { AthenaPipeline } from "../core/AthenaPipeline";

import { SignalRecorder } from "../signals/services/SignalRecorder";

export class LiveAnalysisController {

  private readonly liveData =
    new LiveDataService();

  private readonly snapshotFactory =
    new SnapshotFactory();

  private readonly pipeline =
    new AthenaPipeline();

  private readonly recorder =
    new SignalRecorder();

  async loadFixtures(): Promise<Fixture[]> {

    return this.liveData.loadFixtures();

  }

  async refreshFixture(
    fixtureId: number
  ): Promise<Fixture | null> {

    const fixtures =
      await this.liveData.loadFixtures();

    return fixtures.find(
      fixture => fixture.id === fixtureId
    ) ?? null;

  }

  async analyzeFixture(
    fixture: Fixture
  ) {

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

    const result =
      this.pipeline.analyze(
        snapshot
      );

    this.recorder.record(
      fixture,
      result
    );

    return {

      snapshot,

      ...result.intelligence,

    };

  }

}
