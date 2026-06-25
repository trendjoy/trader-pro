import { FootballAnalyzer } from "../analyzers/football-analyzer";
import { MatchSnapshot } from "../models/match-snapshot";

export class Athena {

  private readonly footballAnalyzer = new FootballAnalyzer();

  public analyze(snapshot: MatchSnapshot) {

    return this.footballAnalyzer.analyze(snapshot);

  }

}