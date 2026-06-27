import { MatchAnalysis } from "../models/match-analysis";
import { MatchInference } from "../inference/match-inference";
import { MatchIntelligence } from "../intelligence/match-intelligence";

export class InferenceAnalyzer {

  analyze(
    intelligence: MatchIntelligence
  ): MatchAnalysis {

    const inferences: MatchInference[] = [];

    if (
      intelligence.home.pressure.score >
      intelligence.away.pressure.score
    ) {
      inferences.push(
        MatchInference.HOME_DOMINATING
      );
    }

    if (
      intelligence.away.pressure.score >
      intelligence.home.pressure.score
    ) {
      inferences.push(
        MatchInference.AWAY_DOMINATING
      );
    }

    if (
      intelligence.home.pressure.score ===
      intelligence.away.pressure.score
    ) {
      inferences.push(
        MatchInference.MATCH_BALANCED
      );
    }

    return {

      intelligence,

      inferences,

    };

  }

}