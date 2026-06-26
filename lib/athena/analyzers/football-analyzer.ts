import { MatchSnapshot } from "../models/match-snapshot";
import { MatchIntelligence } from "../models/match-intelligence";

import { PressureEngine } from "../engines/PressureEngine";
import { MomentumEngine } from "../engines/MomentumEngine";

import { TeamSide } from "../types/team-side";

export class FootballAnalyzer {

  private readonly pressureEngine = new PressureEngine();

  private readonly momentumEngine = new MomentumEngine();

  analyze(snapshot: MatchSnapshot): MatchIntelligence {

    const homePressure = this.pressureEngine.analyze(
      snapshot.homeEvents
    );

    const awayPressure = this.pressureEngine.analyze(
      snapshot.awayEvents
    );

    const homeMomentum = this.momentumEngine.analyze(
      snapshot.homeEvents
    );

    const awayMomentum = this.momentumEngine.analyze(
      snapshot.awayEvents
    );

    const homeStatisticsScore = this.calculateStatisticsScore(
      snapshot.homePossession,
      snapshot.homeShots,
      snapshot.homeShotsOnTarget,
      snapshot.homeCorners,
      snapshot.homeYellowCards
    );

    const awayStatisticsScore = this.calculateStatisticsScore(
      snapshot.awayPossession,
      snapshot.awayShots,
      snapshot.awayShotsOnTarget,
      snapshot.awayCorners,
      snapshot.awayYellowCards
    );

    homePressure.score = Math.round(
      (homePressure.score + homeStatisticsScore) / 2
    );

    awayPressure.score = Math.round(
      (awayPressure.score + awayStatisticsScore) / 2
    );

    let dominantTeam: TeamSide | null = null;

    if (homePressure.score > awayPressure.score) {

      dominantTeam = TeamSide.HOME;

    } else if (awayPressure.score > homePressure.score) {

      dominantTeam = TeamSide.AWAY;

    }

    return {

      minute: snapshot.minute,

      homePressure,

      awayPressure,

      homeMomentum,

      awayMomentum,

      dominantTeam,

      confidence: Math.max(
        homePressure.confidence,
        awayPressure.confidence,
        homeMomentum.confidence,
        awayMomentum.confidence
      ),

    };

  }

  private calculateStatisticsScore(

    possession: number,

    shots: number,

    shotsOnTarget: number,

    corners: number,

    yellowCards: number

  ): number {

    const score =

      possession * 0.25 +

      shots * 2 +

      shotsOnTarget * 8 +

      corners * 4 -

      yellowCards * 2;

    return Math.max(
      0,
      Math.min(100, Math.round(score))
    );

  }

}