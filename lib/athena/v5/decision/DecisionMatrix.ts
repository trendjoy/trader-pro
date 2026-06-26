import { GameState } from "../gamestate/GameState";

export type DecisionAction =
  | "WAIT"
  | "WATCH"
  | "ENTER"
  | "STRONG_ENTER";

export interface DecisionResult{

  action:DecisionAction;

  confidence:number;

  reason:string;

}

export class DecisionMatrix{

  evaluate(

    gameState:GameState,

    heat:number,

    prediction:number,

  ):DecisionResult{

    if(

      gameState==="GOAL_IMMINENT" &&

      heat>=85 &&

      prediction>=75

    ){

      return{

        action:"STRONG_ENTER",

        confidence:95,

        reason:"Goal window detected.",

      };

    }

    if(

      gameState==="HOME_ASSAULT" ||

      gameState==="AWAY_ASSAULT"

    ){

      return{

        action:"ENTER",

        confidence:82,

        reason:"Sustained attacking pressure.",

      };

    }

    if(

      gameState==="BUILDING_PRESSURE"

    ){

      return{

        action:"WATCH",

        confidence:68,

        reason:"Pressure increasing.",

      };

    }

    return{

      action:"WAIT",

      confidence:40,

      reason:"No edge detected.",

    };

  }

}
