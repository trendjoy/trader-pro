import { MatchInference } from "../inference/match-inference";
import { MatchIntelligence } from "../intelligence/match-intelligence";

export interface MatchAnalysis {

  intelligence: MatchIntelligence;

  inferences: MatchInference[];

}