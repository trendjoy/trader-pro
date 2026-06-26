import Card from "../ui/Card";
import Metric from "../ui/Metric";
import ProgressBar from "../ui/ProgressBar";
import Badge from "../ui/Badge";

interface Props {

  side: string;

  confidence: number;

}

export default function DominanceCard({

  side,

  confidence,

}: Props) {

  return (

    <Card title="Dominance">

      <Metric
        value={`${Math.round(confidence * 100)}%`}
      />

      <Badge text={side} />

      <ProgressBar
        value={confidence * 100}
        color="#22c55e"
      />

    </Card>

  );

}
