export enum DecisionAction {
  ENTER = "ENTER",
  WAIT = "WAIT",
  EXIT = "EXIT",
  IGNORE = "IGNORE"
}

export interface Decision {

  action: DecisionAction;

  market: string;

  confidence: number;

  reason: string;

}
