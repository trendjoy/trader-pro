export interface MatchContext{

  phase:
    | "OPENING"
    | "FIRST_HALF"
    | "SECOND_HALF"
    | "FINAL";

  scoreState:
    | "DRAW"
    | "HOME_WINNING"
    | "AWAY_WINNING";

  urgency:
    | "LOW"
    | "MEDIUM"
    | "HIGH";

  tempo:
    | "SLOW"
    | "NORMAL"
    | "FAST";

}
