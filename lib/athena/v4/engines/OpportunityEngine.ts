import { MatchState } from "../models/MatchState";
import { DominanceResult } from "./DominanceEngine";
import { GoalProbabilityResult } from "./GoalProbabilityEngine";

export enum OpportunityType {

  NONE = "NONE",

  HOME_ATTACK = "HOME_ATTACK",

  AWAY_ATTACK = "AWAY_ATTACK",

  HOME_DOMINANCE = "HOME_DOMINANCE",

  AWAY_DOMINANCE = "AWAY_DOMINANCE",

  GOAL_EXPECTATION = "GOAL_EXPECTATION",

  HIGH_PRESSURE = "HIGH_PRESSURE",

  LOW_TEMPO = "LOW_TEMPO",

}

export interface Opportunity {

  type: OpportunityType;

  confidence: number;

  reasons: string[];

}

export class OpportunityEngine {

  analyze(

    state: MatchState,

    dominance: DominanceResult,

    goalProbability: GoalProbabilityResult

  ): Opportunity {

    const reasons: string[] = [];

    if (

      goalProbability.probability < 35 &&

      dominance.level === "BALANCED"

    ) {

      reasons.push(

        "Poucas ações ofensivas"

      );

      return {

        type:

          OpportunityType.LOW_TEMPO,

        confidence: 0.60,

        reasons,

      };

    }

    if (

      goalProbability.probability >= 70

    ) {

      reasons.push(

        "Alta expectativa de gol"

      );

      return {

        type:

          OpportunityType.GOAL_EXPECTATION,

        confidence:

          goalProbability.confidence,

        reasons,

      };

    }

    if (

      dominance.dominantSide === "HOME"

    ) {

      reasons.push(

        "Mandante controla o jogo"

      );

      return {

        type:

          OpportunityType.HOME_DOMINANCE,

        confidence:

          dominance.confidence,

        reasons,

      };

    }

    if (

      dominance.dominantSide === "AWAY"

    ) {

      reasons.push(

        "Visitante controla o jogo"

      );

      return {

        type:

          OpportunityType.AWAY_DOMINANCE,

        confidence:

          dominance.confidence,

        reasons,

      };

    }

    if (

      state.home.shots +

      state.away.shots >= 10

    ) {

      reasons.push(

        "Grande volume ofensivo"

      );

      return {

        type:

          OpportunityType.HIGH_PRESSURE,

        confidence: 0.75,

        reasons,

      };

    }

    return {

      type:

        OpportunityType.NONE,

      confidence: 0,

      reasons: [

        "Nenhuma oportunidade identificada"

      ],

    };

  }

}