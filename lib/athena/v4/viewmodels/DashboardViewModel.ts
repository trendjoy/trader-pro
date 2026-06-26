import { calculateHeatIndex } from "../intelligence/HeatIndex";
import { calculateConfidence } from "../intelligence/ConfidenceEngine";
import { calculateRisk } from "../intelligence/RiskEngine";
import { calculateSignal } from "../intelligence/SignalEngine";

export function createDashboardViewModel(
  analysis:any,
  fixture:any,
){

  const heat=calculateHeatIndex(

    Math.max(
      analysis.home.pressure,
      analysis.away.pressure
    ),

    Math.max(
      analysis.home.momentum,
      analysis.away.momentum
    ),

    Math.max(
      analysis.home.threat,
      analysis.away.threat
    ),

    analysis.goal.probability

  );

  const confidence=

    calculateConfidence([

      analysis.goal.probability,

      Math.max(
        analysis.home.pressure,
        analysis.away.pressure
      ),

      Math.max(
        analysis.home.momentum,
        analysis.away.momentum
      ),

      Math.max(
        analysis.home.threat,
        analysis.away.threat
      )

    ]);

  const risk=

    calculateRisk(
      analysis.goal.probability
    );

  const signal=

    calculateSignal(
      heat.score,
      analysis.goal.probability
    );

  return{

    fixture,

    analysis,

    heat,

    confidence,

    risk,

    signal,

  };

}
