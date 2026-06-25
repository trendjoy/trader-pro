import { MatchSnapshot } from "../models/match-snapshot";
import { MatchIntelligence } from "../models/match-intelligence";
import { PressureAnalyzer } from "./pressure-analyzer";
import { TeamSide } from "../types/team-side";

export class FootballAnalyzer {

  private readonly pressureAnalyzer = new PressureAnalyzer();

  public analyze(snapshot: MatchSnapshot): MatchIntelligence {

    const homePressure = this.pressureAnalyzer.analyze(
      snapshot.homeEvents
    );

    const awayPressure = this.pressureAnalyzer.analyze(
      snapshot.awayEvents
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
      dominantTeam,
      confidence: Math.max(
        homePressure.confidence,
        awayPressure.confidence
      ),
    };
  }
}