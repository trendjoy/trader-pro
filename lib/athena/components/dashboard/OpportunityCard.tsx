interface OpportunityCardProps {
  strategy: string;
  confidence: number;
  reason: string[];
}

export function OpportunityCard({
  strategy,
  confidence,
  reason,
}: OpportunityCardProps) {
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
        }}
      >
        OPORTUNIDADE
      </div>

      <h2
        style={{
          marginTop: 10,
          marginBottom: 0,
        }}
      >
        ⭐⭐⭐⭐⭐
      </h2>

      <h1>{strategy}</h1>

      <p
        style={{
          color: "#22c55e",
          fontWeight: "bold",
        }}
      >
        Confiança {(confidence * 100).toFixed(0)}%
      </p>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 20,
        }}
      >
        {reason.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}