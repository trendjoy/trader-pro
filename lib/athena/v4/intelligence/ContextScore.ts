import { MatchState } from "../models/MatchState";

export class ContextScore {

  calculate(state: MatchState): number {

    let modifier = 1;

    const minute = state.minute;

    const goalDifference = Math.abs(
      state.home.score - state.away.score
    );

    if (minute >= 60) {
      modifier += 0.05;
    }

    if (minute >= 75) {
      modifier += 0.10;
    }

    if (minute >= 85) {
      modifier += 0.15;
    }

    if (goalDifference === 0) {
      modifier += 0.10;
    }

    if (goalDifference >= 2) {
      modifier -= 0.10;
    }

    return Math.max(0.80, Math.min(1.40, modifier));
  }

}
