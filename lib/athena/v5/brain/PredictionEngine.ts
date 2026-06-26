export class PredictionEngine{

  calculate(

    heat:number,

    snapshot:any,

  ){

    return{

      probability:heat,

      expectedSide:

        snapshot.scoreHome>

        snapshot.scoreAway

        ?"HOME"

        :"AWAY",

      window:

        "Next 10 minutes",

    };

  }

}
