import {
  DominanceAnalysis,
  DominanceLevel,
} from "../models/dominance-analysis";

import {
  OpportunityAnalysis,
  OpportunityType,
} from "../models/opportunity-analysis";

export class OpportunityEngine {

  analyze(
    dominance: DominanceAnalysis
  ): OpportunityAnalysis {

    if (
      dominance.level === DominanceLevel.HIGH &&
      dominance.confidence >= 0.8
    ) {

      return {

        type: OpportunityType.LAY_DRAW,

        confidence: dominance.confidence,

        reason: [
          "Alta dominância identificada",
          "Confiança elevada",
          "Pressão sustentada",
        ],

      };

    }

    return {

      type: OpportunityType.NONE,

      confidence: 0,

      reason: [
        "Nenhuma oportunidade encontrada",
      ],

    };

  }

}