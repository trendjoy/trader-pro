export class SignalEngine{

  calculate(

    heat:number,

  ){

    if(heat>=80){

      return{

        action:"STRONG BUY",

        confidence:92,

      };

    }

    if(heat>=60){

      return{

        action:"WATCH",

        confidence:74,

      };

    }

    return{

      action:"WAIT",

      confidence:45,

    };

  }

}
