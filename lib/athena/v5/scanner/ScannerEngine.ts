import { MarketOpportunity } from "./MarketOpportunity";

export class ScannerEngine{

  rank(results:any[]):MarketOpportunity[]{

    return results

      .map(r=>({

        matchId:r.match.id,

        home:r.match.home,

        away:r.match.away,

        minute:r.match.minute,

        heat:r.heat.score,

        confidence:r.decision.confidence,

        decision:r.decision.action,

        gameState:r.gameState,

      }))

      .sort(

        (a,b)=>

          b.heat-a.heat ||

          b.confidence-a.confidence

      );

  }

}
