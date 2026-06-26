export class ConfidenceEngine{

  calculate(

    heat:number,

    probability:number,

  ){

    const confidence=Math.round(

      heat*0.6+

      probability*0.4

    );

    return{

      score:confidence,

      level:

        confidence>=80

        ?"HIGH"

        :confidence>=60

        ?"MEDIUM"

        :"LOW",

    };

  }

}
