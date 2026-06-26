import Card from "../ui/Card";
import Metric from "../ui/Metric";
import ProgressBar from "../ui/ProgressBar";
import Badge from "../ui/Badge";

interface Props {

  probability: number;

  expectedSide: string;

}

export default function GoalProbabilityCard({

  probability,

  expectedSide,

}: Props) {

  return (

    <Card title="Goal Probability">

      <Metric
        value={`${probability}%`}
      />

      <Badge
        text={expectedSide}
        color="#2563eb"
      />

      <ProgressBar
        value={probability}
        color="#38bdf8"
      />

    </Card>

  );

}
