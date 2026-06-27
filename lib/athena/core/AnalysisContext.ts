import { LiveMatch } from "../match/live-match";
import { MatchStatistics } from "../../../app/api/live/MatchStatistics";

export interface AnalysisContext {

  /**
   * Estado atual da partida
   */
  match: LiveMatch;

  /**
   * Estatísticas oficiais vindas da API Football
   */
  statistics?: MatchStatistics;

  /**
   * Resultado das Engines
   */
  pressure?: number;

  momentum?: number;

  dominance?: number;

  confidence?: number;

  /**
   * Sinal gerado pelo ATHENA
   */
  signal?: string;

  /**
   * Explicação textual da IA
   */
  explanation?: string;

}
