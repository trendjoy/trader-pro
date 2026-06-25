export enum TradingAction {

  WAIT = "WAIT",

  ENTER = "ENTER",

  EXIT = "EXIT",

}

export interface TradingSignal {

  action: TradingAction;

  market: string;

  confidence: number;

  reason: string[];

}