"use client";

import { useMemo } from "react";

import { Athena } from "../lib/athena/core/Athena";
import { LiveMatch } from "../lib/athena/match/live-match";

import {
  EventType,
  MatchEvent,
} from "../lib/athena/models/match-event";

import { TeamSide } from "../lib/athena/types/team-side";

import { Dashboard } from "../lib/athena/components/dashboard/Dashboard";
import { MatchCard } from "../lib/athena/components/dashboard/MatchCard";
import { PressureCard } from "../lib/athena/components/dashboard/PressureCard";
import { OpportunityCard } from "../lib/athena/components/dashboard/OpportunityCard";
import { InsightCard } from "../lib/athena/components/dashboard/InsightCard";

export default function HomePage() {

  const intelligence = useMemo(() => {

    const athena = new Athena();

    const match = new LiveMatch();

    const events: MatchEvent[] = [

      {
        id: crypto.randomUUID(),
        minute:61,
        second:10,
        team:TeamSide.HOME,
        type:EventType.ATTACK
      },

      {
        id: crypto.randomUUID(),
        minute:62,
        second:5,
        team:TeamSide.HOME,
        type:EventType.DANGER_ATTACK
      },

      {
        id: crypto.randomUUID(),
        minute:63,
        second:12,
        team:TeamSide.HOME,
        type:EventType.CORNER
      },

      {
        id: crypto.randomUUID(),
        minute:64,
        second:18,
        team:TeamSide.HOME,
        type:EventType.SHOT_ON_TARGET
      }

    ];

    events.forEach(e=>match.addHomeEvent(e));

    return athena.analyze(match);

  },[]);

  return(

    <Dashboard>

      <MatchCard

        homeTeam="Liverpool"

        awayTeam="Arsenal"

        minute={intelligence.minute}

      />

      <PressureCard

        title="PRESSÃO HOME"

        score={intelligence.homePressure.score}

        level={intelligence.homePressure.level}

      />

      <PressureCard

        title="PRESSÃO AWAY"

        score={intelligence.awayPressure.score}

        level={intelligence.awayPressure.level}

      />

      <OpportunityCard

        strategy="Lay Draw"

        confidence={0.91}

        reason={[

          "Mandante domina a partida",

          "Pressão ofensiva crescente",

          "Visitante não responde",

          "Mercado ainda não ajustou"

        ]}

      />

      <InsightCard

        insight="O ATHENA detectou uma sequência ofensiva consistente do mandante. O contexto atual favorece estratégias pró-mandante, porém a decisão continua sendo do trader."

      />

    </Dashboard>

  );

}