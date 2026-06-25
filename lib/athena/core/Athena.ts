import { FootballAnalyzer } from "../analyzers/football-analyzer";
import { LiveMatch } from "../match/live-match";

export class Athena {

  private readonly footballAnalyzer = new FootballAnalyzer();

  public analyze(match: LiveMatch) {

    const snapshot = match.snapshotState();

    return this.footballAnalyzer.analyze(snapshot);

  }

}