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
    <div
      style={{
        background: "#1e293b",
        borderRadius: 16,
        padding: 24,
      }}
    >
      <div
        style={{
          color: "#94a3b8",
        }}
      >
        {title}
      </div>

      <h1
        style={{
          fontSize: 48,
          marginBottom: 0,
        }}
      >
        {score}
      </h1>

      <div
        style={{
          color: "#22c55e",
        }}
      >
        {level}
      </div>
    </div>
  );
}