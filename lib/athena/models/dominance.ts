export interface Dominance {

  home: number;

  away: number;

  dominant:
    | "HOME"
    | "AWAY"
    | "NONE";

  confidence: number;

}