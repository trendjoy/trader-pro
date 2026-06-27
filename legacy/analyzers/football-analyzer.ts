import { MatchSnapshot } from "../models/match-snapshot";
import { MatchIntelligence } from "../models/match-intelligence";

import { PressureEngine } from "../engines/PressureEngine";
import { MomentumEngine } from "../engines/MomentumEngine";
import { GoalProbabilityEngine } from "../engines/GoalProbabilityEngine";

import { TeamSide } from "../types/team-side";

export class FootballAnalyzer {

  private readonly pressureEngine =
    new PressureEngine();

  private readonly momentumEngine =
    new MomentumEngine();

  private readonly goalProbabilityEngine =
    new GoalProbabilityEngine();

  analyze(
    snapshot: MatchSnapshot
  ): MatchIntelligence {

    const homePressure =
      this.pressureEngine.analyze(
        snapshot.homeEvents
      );

    const awayPressure =
      this.pressureEngine.analyze(
        snapshot.awayEvents
      );

    const homeMomentum =
      this.momentumEngine.analyze(
        snapshot.homeEvents
      );

    const awayMomentum =
      this.momentumEngine.analyze(
        snapshot.awayEvents
      );

    const goalProbability =
      this.goalProbabilityEngine.analyze(
        snapshot
      );

    let dominantTeam:
      TeamSide | null = null;

    if (
      homePressure.score >
      awayPressure.score
    ) {

      dominantTeam =
        TeamSide.HOME;

    }

    if (
      awayPressure.score >
      homePressure.score
    ) {

      dominantTeam =
        TeamSide.AWAY;

    }

    return {

      minute:
        snapshot.minute,

      homePressure,

      awayPressure,

      homeMomentum,

      awayMomentum,

      goalProbability,

      dominantTeam,

      confidence:
        Math.max(

          homePressure.confidence,

          awayPressure.confidence,

          homeMomentum.confidence,

          awayMomentum.confidence,

          goalProbability.confidence,

        ),

    };

  }

}