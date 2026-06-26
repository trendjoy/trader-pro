import Card from "../ui/Card";
import Metric from "../ui/Metric";

interface Props {

  home: string;

  away: string;

  homeScore: number;

  awayScore: number;

  minute: number;

}

export default function MatchCard({

  home,

  away,

  homeScore,

  awayScore,

  minute,

}: Props) {

  return (

    <Card title="Current Match">

      <Metric
        value={`${home} ${homeScore} × ${awayScore} ${away}`}
      />

      <div
        style={{
          marginTop:20,
          fontSize:52,
          fontWeight:800,
          color:"#38bdf8",
        }}
      >

        {minute}'

      </div>

    </Card>

  );

}
