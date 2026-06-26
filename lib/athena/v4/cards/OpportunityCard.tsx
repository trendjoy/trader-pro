import Card from "../ui/Card";
import Badge from "../ui/Badge";

interface Props {

  type: string;

  confidence: number;

  reasons: string[];

}

export default function OpportunityCard({

  type,

  confidence,

  reasons,

}: Props) {

  return (

    <Card title="AI Opportunity">

      <div
        style={{
          fontSize:36,
          fontWeight:800,
          color:"#22c55e",
        }}
      >

        {type}

      </div>

      <Badge
        text={`${Math.round(confidence*100)}% Confidence`}
      />

      <ul
        style={{
          marginTop:20,
          paddingLeft:20,
          color:"#cbd5e1",
        }}
      >

        {reasons.map((reason,index)=>(

          <li key={index}>

            {reason}

          </li>

        ))}

      </ul>

    </Card>

  );

}
