export interface Decision{

  action:
    | "WAIT"
    | "WATCH"
    | "ENTER"
    | "STRONG_ENTER";

  confidence:number;

  reason:string;

}
