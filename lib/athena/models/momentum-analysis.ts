export enum MomentumTrend {

  FALLING = "FALLING",

  STABLE = "STABLE",

  RISING = "RISING",

}

export interface MomentumAnalysis {

  value: number;

  trend: MomentumTrend;

  confidence: number;

}