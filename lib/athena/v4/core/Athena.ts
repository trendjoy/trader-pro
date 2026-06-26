import { MatchSnapshot } from "../../models/match-snapshot";

import { MatchStateAnalyzer } from "../analysis/MatchStateAnalyzer";

import {
  PressureEngine,
  PressureResult,
} from "../engines/PressureEngine";

import {
  MomentumEngine,
  MomentumResult,
} from "../engines/MomentumEngine";

export interface AthenaResult {

  snapshot: MatchSnapshot;

  state: ReturnType<MatchStateAnalyzer["analyze"]>;

  pressure: PressureResult;

  momentum: MomentumResult;

}

export class Athena {

  private readonly stateAnalyzer =
    new MatchStateAnalyzer();

  private readonly pressureEngine =
    new PressureEngine();

  private readonly momentumEngine =
    new MomentumEngine();

  analyze(
    snapshot: MatchSnapshot
  ): AthenaResult {

    const state =
      this.stateAnalyzer.analyze(
        snapshot
      );

    const pressure =
      this.pressureEngine.analyze(
        state
      );

    const momentum =
      this.momentumEngine.analyze(
        state
      );

    return {

      snapshot,

      state,

      pressure,

      momentum,

    };

  }

}