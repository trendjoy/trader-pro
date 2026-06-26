import Card from "../ui/Card";
import Metric from "../ui/Metric";

interface Props {

  home: string;

  away: string;

  minute: number;

}

export default function MatchCard({

  home,

  away,

  minute,

}: Props) {

  return (

    <Card title="Current Match">

      <Metric
        value={`${home} × ${away}`}
      />

      <div
        style={{
          marginTop: 20,
          fontSize: 52,
          fontWeight: 800,
          color: "#38bdf8",
        }}
      >

        {minute}'

      </div>

    </Card>

  );

}
