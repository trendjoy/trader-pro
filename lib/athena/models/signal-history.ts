import { TradingSignal } from "./trading-signal";

export interface SignalHistory {

  minute: number;

  signal: TradingSignal;

  createdAt: Date;

}