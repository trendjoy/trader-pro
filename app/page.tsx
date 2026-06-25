"use client";

import { useMemo } from "react";

import { Athena } from "../lib/athena/core/Athena";
import { LiveMatch } from "../lib/athena/match/live-match";
import {
  EventType,
  MatchEvent,
} from "../lib/athena/models/match-event";
import { TeamSide } from "../lib/athena/types/team-side";

export default function HomePage() {
  const intelligence = useMemo(() => {
    const athena = new Athena();

    const match = new LiveMatch();

    const events: MatchEvent[] = [
      {
        id: crypto.randomUUID(),
        minute: 61,
        second: 10,
        team: TeamSide.HOME,
        type: EventType.ATTACK,
      },
      {
        id: crypto.randomUUID(),
        minute: 62,
        second: 15,
        team: TeamSide.HOME,
        type: EventType.DANGER_ATTACK,
      },
      {
        id: crypto.randomUUID(),
        minute: 63,
        second: 8,
        team: TeamSide.HOME,
        type: EventType.CORNER,
      },
      {
        id: crypto.randomUUID(),
        minute: 64,
        second: 30,
        team: TeamSide.HOME,
        type: EventType.SHOT_ON_TARGET,
      },
    ];

    events.forEach((e) => match.addHomeEvent(e));

    return athena.analyze(match);
  }, []);

  return (
    <main
      style={{
        background: "#0f172a",
        color: "#fff",
        minHeight: "100vh",
        padding: 40,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 36 }}>ATHENA</h1>

      <h2 style={{ color: "#94a3b8" }}>
        Football Intelligence
      </h2>

      <div
        style={{
          marginTop: 30,
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 20,
        }}
      >
        <Card
          title="PARTIDA"
          value="HOME x AWAY"
          footer={`${intelligence.minute}'`}
        />

        <Card
          title="TIME DOMINANTE"
          value={intelligence.dominantTeam ?? "EMPATE"}
          footer={`${(
            intelligence.confidence * 100
          ).toFixed(0)}% confiança`}
        />

        <Card
          title="PRESSÃO HOME"
          value={String(intelligence.homePressure.score)}
          footer={intelligence.homePressure.level}
        />

        <Card
          title="PRESSÃO AWAY"
          value={String(intelligence.awayPressure.score)}
          footer={intelligence.awayPressure.level}
        />
      </div>
    </main>
  );
}

interface CardProps {
  title: string;
  value: string;
  footer: string;
}

function Card({
  title,
  value,
  footer,
}: CardProps) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: 24,
        borderRadius: 14,
      }}
    >
      <div
        style={{
          color: "#94a3b8",
          fontSize: 14,
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: 15,
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        {value}
      </div>

      <div
        style={{
          marginTop: 10,
          color: "#22c55e",
        }}
      >
        {footer}
      </div>
    </div>
  );
}