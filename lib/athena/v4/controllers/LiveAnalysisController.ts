import { Fixture } from "../../live/Fixture";

import { LiveDataService } from "../../services/LiveDataService";

import { SnapshotFactory } from "../../live/SnapshotFactory";

import { AthenaPipeline } from "../core/AthenaPipeline";

import { MatchAnalysis } from "../models/MatchAnalysis";

import { SignalEngine } from "../../signals/engine/SignalEngine";

export class LiveAnalysisController {

  private readonly liveData =
    new LiveDataService();

  private readonly snapshotFactory =
    new SnapshotFactory();

  private readonly pipeline =
    new AthenaPipeline();

  private readonly signalEngine =
    new SignalEngine();

  async loadFixtures(): Promise<Fixture[]> {

    return this.liveData.loadFixtures();

  }

  async refreshFixture(
    fixtureId:number
  ):Promise<Fixture|null>{

    const fixtures=

      await this.liveData.loadFixtures();

    return (

      fixtures.find(

        fixture=>

          fixture.id===fixtureId

      )??null

    );

  }

  async analyzeFixture(
    fixture:Fixture
  ):Promise<MatchAnalysis>{

    const liveMatch=

      await this.liveData.loadMatch(
        fixture.id
      );

    if(!liveMatch){

      throw new Error(
        "Partida não encontrada."
      );

    }

    const snapshot=

      this.snapshotFactory.create(
        liveMatch
      );

    console.log("===== SNAPSHOT =====");

    console.dir(snapshot,{depth:null});

    const analysis=

      this.pipeline.analyze(
        snapshot
      );

    await this.signalEngine.emit({

      fixtureId:
        fixture.id,

      league:
        fixture.league.name,

      home:
        fixture.home.name,

      away:
        fixture.away.name,

      minute:
        analysis.minute,

      market:
        analysis.trading.market,

      action:
        analysis.trading.action,

      selection:
        analysis.trading.selection,

      confidence:
        analysis.trading.confidence,

      stake:
        Number(
          analysis.trading.stake
        )||1,

      odd:
        null,

      status:
        "PENDING",

      analysis,

    });

    return analysis;

  }

}
