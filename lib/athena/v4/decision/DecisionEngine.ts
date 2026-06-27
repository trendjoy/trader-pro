import { Decision, DecisionAction } from "./Decision";
import { PressureResult } from "../engines/PressureEngine";
import { MomentumResult } from "../engines/MomentumEngine";
import { MatchState } from "../models/MatchState";

export class DecisionEngine {

  analyze(
    state: MatchState,
    pressure: PressureResult,
    momentum: MomentumResult
  ): Decision {

    const homePressure = pressure.home.score;
    const awayPressure = pressure.away.score;

    const homeMomentum = momentum.home.score;
    const awayMomentum = momentum.away.score;

    if (
      pressure.dominantSide === "HOME" &&
      homePressure >= 80 &&
      homeMomentum >= 70
    ) {

      return {
        action: DecisionAction.ENTER,
        market: "LAY_DRAW",
        confidence: 92,
        reason:
          "Mandante apresenta pressão elevada, momentum crescente e domínio da partida."
      };

    }

    if (
      pressure.dominantSide === "AWAY" &&
      awayPressure >= 80 &&
      awayMomentum >= 70
    ) {

      return {
        action: DecisionAction.ENTER,
        market: "LAY_DRAW",
        confidence: 91,
        reason:
          "Visitante apresenta pressão elevada, momentum crescente e domínio da partida."
      };

    }

    if (
      Math.abs(homePressure - awayPressure) < 10
    ) {

      return {
        action: DecisionAction.WAIT,
        market: "NONE",
        confidence: 60,
        reason:
          "Equilíbrio entre as equipes. Aguarde um cenário mais definido."
      };

    }

    return {

      action: DecisionAction.IGNORE,

      market: "NONE",

      confidence: 40,

      reason:
        "Nenhum padrão confiável identificado."

    };

  }

}
