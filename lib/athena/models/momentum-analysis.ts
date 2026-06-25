export interface MomentumAnalysis {

  value: number;

  trend: "RISING" | "STABLE" | "FALLING";

  confidence: number;

}