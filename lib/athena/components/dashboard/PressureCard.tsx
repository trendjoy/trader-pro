import { Card } from "./Card";
import { ProgressBar } from "./ProgressBar";
import { StatusBadge } from "./StatusBadge";

interface PressureCardProps {
  title: string;
  score: number;
  level: string;
}

export function PressureCard({
  title,
  score,
  level,
}: PressureCardProps) {
  return (
    <Card>

      <div
        style={{
          color: "#94a3b8",
          fontSize: 14,
        }}
      >
        {title}
      </div>

      <h1
        style={{
          fontSize: 54,
          margin: "12px 0",
        }}
      >
        {score}
      </h1>

      <StatusBadge value={level} />

      <ProgressBar value={score} />

    </Card>
  );
}