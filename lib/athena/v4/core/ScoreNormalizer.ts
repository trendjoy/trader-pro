export interface NormalizedScore {

  home:number;

  away:number;

}

export class ScoreNormalizer{

  normalize(

    homeRaw:number,

    awayRaw:number

  ):NormalizedScore{

    if(homeRaw<=0 && awayRaw<=0){

      return{

        home:0,

        away:0,

      };

    }

    const total=

      homeRaw+

      awayRaw;

    return{

      home:

        Math.round(

          homeRaw/

          total*

          100

        ),

      away:

        Math.round(

          awayRaw/

          total*

          100

        ),

    };

  }

}
