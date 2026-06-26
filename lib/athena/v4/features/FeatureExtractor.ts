import { MatchState } from "../models/MatchState";
import { MatchFeatures } from "./MatchFeatures";

export class FeatureExtractor{

  extract(
    state:MatchState,
  ):MatchFeatures{

    return{

      minute:state.minute,

      homeScore:state.home.score,

      awayScore:state.away.score,

      scoreDifference:state.scoreDifference,

      possessionDifference:state.possessionDifference,

      shotsDifference:state.shotsDifference,

      shotsOnTargetDifference:state.shotsOnTargetDifference,

      cornersDifference:state.cornersDifference,

      isDraw:
        state.home.score===state.away.score,

      isHomeWinning:
        state.home.score>state.away.score,

      isAwayWinning:
        state.away.score>state.home.score,

      isFinalStage:
        state.minute>=75,

      isFirstHalf:
        state.minute<45,

    };

  }

}
