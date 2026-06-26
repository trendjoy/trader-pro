import { MatchState } from "../models/MatchState";

import {
  ThreatAnalysis,
  ThreatLevel,
} from "../models/ThreatAnalysis";

export class ThreatEngine {

  analyze(
    state: MatchState
  ): ThreatAnalysis {

    let score = 0;

    const reasons: string[] = [];

    /*
     * POSSE
     */

    const possession = Math.max(

      state.home.possession,

      state.away.possession

    );

    if (possession >= 60) {

      score += 15;

      reasons.push(
        "Posse dominante"
      );

    }

    /*
     * FINALIZAÇÕES
     */

    const shots = Math.max(

      state.home.shots,

      state.away.shots

    );

    score += Math.min(

      shots * 3,

      24

    );

    if (shots >= 8) {

      reasons.push(
        "Grande volume de finalizações"
      );

    }

    /*
     * CHUTES NO GOL
     */

    const shotsOnTarget = Math.max(

      state.home.shotsOnTarget,

      state.away.shotsOnTarget

    );

    score += Math.min(

      shotsOnTarget * 6,

      30

    );

    if (shotsOnTarget >= 3) {

      reasons.push(
        "Finalizações perigosas"
      );

    }

    /*
     * ESCANTEIOS
     */

    const corners = Math.max(

      state.home.corners,

      state.away.corners

    );

    score += Math.min(

      corners * 2,

      10

    );

    if (corners >= 4) {

      reasons.push(
        "Pressão por escanteios"
      );

    }

    /*
     * MOMENTO DO JOGO
     */

    if (state.minute >= 70) {

      score += 10;

      reasons.push(
        "Minutos finais"
      );

    }

    /*
     * EMPATE
     */

    if (

      state.home.score ===

      state.away.score

    ) {

      score += 10;

      reasons.push(
        "Jogo empatado"
      );

    }

    /*
     * DOMÍNIO
     */

    if (

      state.dominantSide !== "NONE"

    ) {

      score += 10;

      reasons.push(
        "Domínio territorial"
      );

    }

    /*
     * LIMITA SCORE
     */

    score = Math.min(

      score,

      100

    );

    let level =
      ThreatLevel.LOW;

    if (score >= 85) {

      level =
        ThreatLevel.CRITICAL;

    }

    else if (score >= 65) {

      level =
        ThreatLevel.HIGH;

    }

    else if (score >= 40) {

      level =
        ThreatLevel.MEDIUM;

    }

    return {

      score,

      level,

      confidence:
        score / 100,

      reasons,

    };

  }

}