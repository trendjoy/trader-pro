import { MatchFeatures } from "../features/MatchFeatures";

export function pressureModifier(
  features: MatchFeatures,
): number {

  let modifier = 1;

  if (
    features.isDraw &&
    features.minute >= 70
  ) {

    modifier += 0.20;

  }

  if (
    features.isHomeWinning ||
    features.isAwayWinning
  ) {

    modifier -= 0.05;

  }

  if (
    features.isFinalStage
  ) {

    modifier += 0.15;

  }

  return modifier;

}
