import { MatchContext } from "../models/MatchContext";

export class HeatEngine{

  calculate(

    context:MatchContext,

    snapshot:any,

  ){

    let score=40;

    if(context.urgency==="HIGH"){

      score+=25;

    }

    if(context.tempo==="FAST"){

      score+=20;

    }

    if(context.scoreState==="DRAW"){

      score+=10;

    }

    score=Math.min(100,score);

    return{

      score,

      level:

        score>=80

        ?"CRITICAL"

        :score>=60

        ?"HIGH"

        :score>=40

        ?"MEDIUM"

        :"LOW",

      color:

        score>=80

        ?"#dc2626"

        :score>=60

        ?"#ea580c"

        :score>=40

        ?"#eab308"

        :"#22c55e",

    };

  }

}
