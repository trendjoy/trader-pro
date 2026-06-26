export function calculateSignal(

 heat:number,

 probability:number,

){

 if(

  heat>=80&&

  probability>=70

 ){

  return"STRONG BUY";

 }

 if(

  heat>=60

 ){

  return"WATCH";

 }

 return"WAIT";

}
