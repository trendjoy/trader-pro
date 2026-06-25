interface InsightCardProps {
  insight: string;
}

export function InsightCard({
  insight,
}: InsightCardProps) {
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
          fontSize: 14,
          marginBottom: 16,
        }}
      >
        ATHENA AI
      </div>

      <p
        style={{
          lineHeight: 1.8,
          color: "#e2e8f0",
        }}
      >
        {insight}
      </p>
    </div>
  );
}