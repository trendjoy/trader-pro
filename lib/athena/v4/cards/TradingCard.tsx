import Card from "../ui/Card";
import Badge from "../ui/Badge";

interface Props{

 market:string;

 action:string;

 selection:string;

 confidence:number;

 stake:number|string;

}

export default function TradingCard({

 market,

 action,

 selection,

 confidence,

 stake,

}:Props){

 return(

  <Card title="Trading Recommendation">

   <div
    style={{
      fontSize:18,
      color:"#cbd5e1",
      lineHeight:2,
    }}
   >

    <div>

      <strong>Market:</strong> {market}

    </div>

    <div>

      <strong>Action:</strong> {action}

    </div>

    <div>

      <strong>Selection:</strong> {selection}

    </div>

    <div>

      <strong>Stake:</strong> {stake}

    </div>

    <Badge

      text={`${Math.round(confidence*100)}% Confidence`}

      color="#2563eb"

    />

   </div>

  </Card>

 );

}
