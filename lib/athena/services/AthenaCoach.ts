import { MatchIntelligence } from "../models/match-intelligence";

export class AthenaCoach {

  public explain(
    intelligence: MatchIntelligence
  ): string {

    if (!intelligence.dominantTeam) {

      return "A partida está equilibrada. Ainda não existe vantagem clara para nenhuma equipe.";

    }

    const pressure =
      intelligence.dominantTeam === "HOME"
        ? intelligence.homePressure
        : intelligence.awayPressure;

    const momentum =
      intelligence.dominantTeam === "HOME"
        ? intelligence.homeMomentum
        : intelligence.awayMomentum;

    const messages: string[] = [];

    messages.push(
      `${intelligence.dominantTeam} controla a partida.`
    );

    if (pressure.score >= 70) {

      messages.push(
        "A pressão ofensiva permanece elevada."
      );

    }

    if (momentum.value >= 70) {

      messages.push(
        "O ritmo ofensivo continua crescendo."
      );

    }

    messages.push(
      `Confiança ${Math.round(
        intelligence.confidence * 100
      )}%`
    );

    return messages.join(" ");

  }

}