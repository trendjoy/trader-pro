import { Metrics } from "./Metrics";

export interface BacktestResult {

  sessionId: string;

  strategy: string;

  dataset: string;

  metrics: Metrics;

  startedAt: Date;

  finishedAt: Date;

}
