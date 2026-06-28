import { SignalSummary } from "../models/SignalSummary";

export class SignalStatistics {

  summary(signals: any[]): SignalSummary {

    const greens =
      signals.filter(s => s.status === "GREEN").length;

    const reds =
      signals.filter(s => s.status === "RED").length;

    const pending =
      signals.filter(s => s.status === "PENDING").length;

    const total =
      signals.length;

    const winRate =
      total === 0
        ? 0
        : (greens / total) * 100;

    const roi =
      signals.reduce(
        (sum, signal) =>
          sum + (signal.profit ?? 0),
        0
      );

    return {
      total,
      pending,
      greens,
      reds,
      winRate,
      roi,
    };

  }

}
