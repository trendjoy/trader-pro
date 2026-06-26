import { MatchSnapshot } from "../../models/match-snapshot";

import { MatchStateAnalyzer } from "../analysis/MatchStateAnalyzer";

import { PressureEngine } from "../engines/PressureEngine";
import { MomentumEngine } from "../engines/MomentumEngine";
import { DominanceEngine } from "../engines/DominanceEngine";
import { GoalProbabilityEngine } from "../engines/GoalProbabilityEngine";
import { OpportunityEngine } from "../engines/OpportunityEngine";
import { TradingEngine } from "../engines/TradingEngine";

import { MatchAnalysis } from "../models/MatchAnalysis";

export class AthenaPipeline {

  private readonly stateAnalyzer =
    new MatchStateAnalyzer();

  private readonly pressureEngine =
    new PressureEngine();

  private readonly momentumEngine =
    new MomentumEngine();

  private readonly dominanceEngine =
    new DominanceEngine();

  private readonly goalProbabilityEngine =
    new GoalProbabilityEngine();

  private readonly opportunityEngine =
    new OpportunityEngine();

  private readonly tradingEngine =
    new TradingEngine();

  public analyze(
    snapshot: MatchSnapshot
  ): MatchAnalysis {

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

    const dominance =
      this.dominanceEngine.analyze(
        pressure,
        momentum
      );

    const goalProbability =
      this.goalProbabilityEngine.analyze(
        state,
        pressure,
        momentum,
        dominance
      );

    const opportunity =
      this.opportunityEngine.analyze(
        state,
        dominance,
        goalProbability
      );

    const trading =
      this.tradingEngine.analyze(
        opportunity
      );

    const analysis: MatchAnalysis = {

      minute:
        snapshot.minute,

      home: {

        pressure:
          pressure.home.score,

        pressureLevel:
          pressure.home.level,

        momentum:
          momentum.home.score,

        momentumLevel:
          momentum.home.level,

      },

      away: {

        pressure:
          pressure.away.score,

        pressureLevel:
          pressure.away.level,

        momentum:
          momentum.away.score,

        momentumLevel:
          momentum.away.level,

      },

      dominantSide:
        dominance.dominantSide,

      goal: {

        probability:
          goalProbability.probability,

        expectedSide:
          goalProbability.expectedSide,

      },

      opportunity: {

        type:
          opportunity.type,

        confidence:
          opportunity.confidence,

        reasons:
          opportunity.reasons,

      },

      trading: {

        market:
          trading.market,

        action:
          trading.action,

        selection:
          trading.selection,

        confidence:
          trading.confidence,

        stake:
          trading.stake,

      },

    };

    return analysis;

  }

}