import { GameState } from "./GameState";

export class GameStateEngine{

 analyze(snapshot:any):GameState{

  const minute=snapshot.minute??0;

  const homeShots=snapshot.homeShots??0;

  const awayShots=snapshot.awayShots??0;

  const totalShots=

    homeShots+

    awayShots;

  const draw=

    (snapshot.scoreHome??0)==

    (snapshot.scoreAway??0);

  if(

    minute>=80&&

    draw&&

    totalShots>=20

  ){

    return"GOAL_IMMINENT";

  }

  if(

    minute>=75&&

    draw

  ){

    return"FINAL_PUSH";

  }

  if(totalShots>=28){

    return"CHAOTIC";

  }

  if(totalShots>=18){

    return"OPEN_GAME";

  }

  if(homeShots-awayShots>=6){

    return"HOME_ASSAULT";

  }

  if(awayShots-homeShots>=6){

    return"AWAY_ASSAULT";

  }

  if(totalShots>=10){

    return"BUILDING_PRESSURE";

  }

  return"BALANCED";

 }

}
