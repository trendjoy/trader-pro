import { MatchContext } from "../models/MatchContext";

export class CoachEngine{

  calculate(

    context:MatchContext,

    heat:number,

  ){

    return{

      summary:

        `${context.phase} | ${context.tempo}`,

      reasons:[

        `Urgency: ${context.urgency}`,

        `Heat Index: ${heat}`,

      ],

    };

  }

}
