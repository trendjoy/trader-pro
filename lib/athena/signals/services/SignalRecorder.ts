import { Fixture } from "../../live/Fixture";

import { PipelineResult } from "../../core/AthenaPipeline";

import { AthenaSignal } from "../models/AthenaSignal";

import { SignalRepository } from "../repository/SignalRepository";

import { createSignalId } from "./createSignalId";

export class SignalRecorder {

  private readonly repository =
    new SignalRepository();

  record(

    fixture: Fixture,

    result: PipelineResult

  ) {

    if (

      result.signal.action === "WAIT" ||

      result.signal.confidence < 0.70

    ) {

      return;

    }

    const signal: AthenaSignal = {

      id: createSignalId(),

      fixtureId: fixture.id,

      league: fixture.league.name,

      home: fixture.home.name,

      away: fixture.away.name,

      date: fixture.date,

      minute:

        result.intelligence.state.minute,

      action:

        result.signal.action,

      market:

        result.signal.market,

      confidence:

        result.signal.confidence,

      reason:

        result.signal.reason,

      insight:

        result.insight,

      status: "PENDING",

      odd: 0,

      profit: 0,

      createdAt:

        new Date().toISOString(),

    };

    this.repository.save(signal);

    console.log(

      "ATHENA SIGNAL RECORDED",

      signal

    );

  }

}
