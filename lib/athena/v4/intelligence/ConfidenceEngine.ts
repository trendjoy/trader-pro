export function calculateConfidence(

 values:number[],

){

 const average=

 values.reduce(

  (a,b)=>a+b,

 0,

 )/values.length;

 return Math.round(average);

}
