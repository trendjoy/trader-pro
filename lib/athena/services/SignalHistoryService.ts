import { SignalHistory } from "../models/signal-history";
import { TradingSignal } from "../models/trading-signal";

export class SignalHistoryService {

  private readonly history: SignalHistory[] = [];

  add(minute: number, signal: TradingSignal): void {

    this.history.push({
      minute,
      signal,
      createdAt: new Date(),
    });

  }

  all(): SignalHistory[] {

    return [...this.history];

  }

  clear(): void {

    this.history.length = 0;

  }

}