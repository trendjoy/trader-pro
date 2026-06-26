import { MatchSnapshot } from "../models/match-snapshot";

import { MatchStateAnalyzer } from "../v4/analysis/MatchStateAnalyzer";

import { PressureEngine } from "../v4/engines/PressureEngine";
import { MomentumEngine } from "../v4/engines/MomentumEngine";

export class Athena {

  private readonly stateAnalyzer =
    new MatchStateAnalyzer();

  private readonly pressureEngine =
    new PressureEngine();

  private readonly momentumEngine =
    new MomentumEngine();

  analyze(
    snapshot: MatchSnapshot
  ) {

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

    const dominantTeam =
      pressure.dominantSide;

    const confidence =
      Math.max(

        pressure.home.score,

        pressure.away.score,

        momentum.home.score,

        momentum.away.score

      ) / 100;

    return {

      minute:
        state.minute,

      state,

      pressure,

      momentum,

      /*
       * Compatibilidade com a Home antiga
       */

      homePressure:
        pressure.home,

      awayPressure:
        pressure.away,

      homeMomentum:
        momentum.home,

      awayMomentum:
        momentum.away,

      dominantTeam,

      confidence,

    };

  }

}