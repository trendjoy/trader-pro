export function calculateRisk(

 probability:number,

){

 if(probability>=80){

  return"LOW";

 }

 if(probability>=60){

  return"MEDIUM";

 }

 return"HIGH";

}
