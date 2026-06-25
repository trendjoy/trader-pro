import { Card } from "./Card";

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
    <Card>
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
          marginTop: 12,
          marginBottom: 12,
          fontSize: 28,
        }}
      >
        {homeTeam} × {awayTeam}
      </h2>

      <div
        style={{
          fontSize: 56,
          fontWeight: 700,
          color: "#38bdf8",
        }}
      >
        {minute}'
      </div>
    </Card>
  );
}