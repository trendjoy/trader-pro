interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  minute: number;
}

export function MatchCard({
  homeTeam,
  awayTeam,
  minute,
}: MatchCardProps) {
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
        PARTIDA
      </div>

      <h2
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {homeTeam} x {awayTeam}
      </h2>

      <h1>{minute}'</h1>
    </div>
  );
}