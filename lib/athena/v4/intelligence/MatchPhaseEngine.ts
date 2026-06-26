export type MatchPhase =
  | "OPENING"
  | "FIRST_HALF"
  | "SECOND_HALF"
  | "FINAL_PRESSURE";

export function getMatchPhase(
  minute:number,
):MatchPhase{

 if(minute<15){

   return"OPENING";

 }

 if(minute<45){

   return"FIRST_HALF";

 }

 if(minute<75){

   return"SECOND_HALF";

 }

 return"FINAL_PRESSURE";

}
