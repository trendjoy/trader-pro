export interface HeatIndexResult{

 score:number;

 level:string;

 color:string;

}

export function calculateHeatIndex(

 pressure:number,

 momentum:number,

 threat:number,

 probability:number,

){

 const score=Math.round(

  pressure*0.30+

  momentum*0.25+

  threat*0.20+

  probability*0.25

 );

 if(score>=80){

  return{

   score,

   level:"CRITICAL",

   color:"#dc2626",

  };

 }

 if(score>=60){

  return{

   score,

   level:"HIGH",

   color:"#ea580c",

  };

 }

 if(score>=40){

  return{

   score,

   level:"MEDIUM",

   color:"#f59e0b",

  };

 }

 return{

  score,

  level:"LOW",

  color:"#22c55e",

 };

}
