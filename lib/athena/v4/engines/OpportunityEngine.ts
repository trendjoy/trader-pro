import { MatchState } from "../models/MatchState";

import { DominanceResult } from "./DominanceEngine";
import { GoalProbabilityResult } from "./GoalProbabilityEngine";

export enum OpportunityType {

  NONE = "NONE",

  LAY_DRAW = "LAY_DRAW",

  BACK_HOME = "BACK_HOME",

  BACK_AWAY = "BACK_AWAY",

  OVER_15 = "OVER_15",

  OVER_25 = "OVER_25",

  UNDER_25 = "UNDER_25",

  WAIT = "WAIT",

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

    goal: GoalProbabilityResult

  ): Opportunity {

    const reasons: string[] = [];

    /*
     * Mercado sem valor
     */

    if (

      goal.probability < 45

    ) {

      reasons.push(

        "Probabilidade de gol muito baixa"

      );

      return {

        type:

          OpportunityType.WAIT,

        confidence: 0.30,

        reasons,

      };

    }

    /*
     * Lay Draw
     */

    if (

      goal.probability >= 80 &&

      state.home.score ===

      state.away.score

    ) {

      reasons.push(

        "Alta probabilidade de gol"

      );

      reasons.push(

        "Partida empatada"

      );

      reasons.push(

        "Mercado Lay Draw"

      );

      return {

        type:

          OpportunityType.LAY_DRAW,

        confidence:

          goal.confidence,

        reasons,

      };

    }

    /*
     * Back Home
     */

    if (

      goal.expectedSide === "HOME"

    ) {

      reasons.push(

        "Mandante domina a partida"

      );

      reasons.push(

        "Próximo gol esperado do mandante"

      );

      return {

        type:

          OpportunityType.BACK_HOME,

        confidence:

          goal.confidence,

        reasons,

      };

    }

    /*
     * Back Away
     */

    if (

      goal.expectedSide === "AWAY"

    ) {

      reasons.push(

        "Visitante domina a partida"

      );

      reasons.push(

        "Próximo gol esperado do visitante"

      );

      return {

        type:

          OpportunityType.BACK_AWAY,

        confidence:

          goal.confidence,

        reasons,

      };

    }

    /*
     * Over 2.5
     */

    if (

      goal.probability >= 75 &&

      state.minute <= 70

    ) {

      reasons.push(

        "Grande expectativa ofensiva"

      );

      reasons.push(

        "Tempo suficiente"

      );

      return {

        type:

          OpportunityType.OVER_25,

        confidence:

          goal.confidence,

        reasons,

      };

    }

    /*
     * Over 1.5
     */

    if (

      goal.probability >= 65

    ) {

      reasons.push(

        "Boa expectativa de gol"

      );

      return {

        type:

          OpportunityType.OVER_15,

        confidence:

          goal.confidence,

        reasons,

      };

    }

    /*
     * Under 2.5
     */

    if (

      goal.probability <= 30 &&

      state.minute >= 60

    ) {

      reasons.push(

        "Baixa produção ofensiva"

      );

      reasons.push(

        "Jogo controlado"

      );

      return {

        type:

          OpportunityType.UNDER_25,

        confidence:

          0.70,

        reasons,

      };

    }

    return {

      type:

        OpportunityType.NONE,

      confidence: 0,

      reasons: [

        "Nenhuma oportunidade encontrada"

      ],

    };

  }

}