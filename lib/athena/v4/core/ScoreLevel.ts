export function calculateLevel(
  score: number
){

  if(score>=80) return "EXTREME";

  if(score>=60) return "HIGH";

  if(score>=35) return "MEDIUM";

  return "LOW";

}
