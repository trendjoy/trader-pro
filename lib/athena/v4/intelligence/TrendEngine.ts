export type Trend="UP"|"DOWN"|"STABLE";

export function calculateTrend(

 current:number,

 previous:number,

):Trend{

 if(current>previous+3){

  return"UP";

 }

 if(current<previous-3){

  return"DOWN";

 }

 return"STABLE";

}
