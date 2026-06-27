import { MatchStatistics } from "../../../app/api/live/MatchStatistics";

export interface PressureResult {

  score:number;

  level:"LOW"|"MEDIUM"|"HIGH";

}

export class PressureEngine{

  calculate(stats:MatchStatistics):PressureResult{

    const home=

      stats.homePossession*0.35+

      stats.homeShots*2+

      stats.homeShotsOnTarget*6+

      stats.homeCorners*2;

    const away=

      stats.awayPossession*0.35+

      stats.awayShots*2+

      stats.awayShotsOnTarget*6+

      stats.awayCorners*2;

    const score=

      Math.max(home,away);

    return{

      score:Math.round(score),

      level:

        score>=80

          ?"HIGH"

          :score>=45

          ?"MEDIUM"

          :"LOW"

    };

  }

}
