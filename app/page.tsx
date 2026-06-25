"use client";

import { useMemo } from "react";

import { Athena } from "../lib/athena/core/Athena";

import { useMatchSimulation } from "../lib/athena/hooks/useMatchSimulation";
import { useFootballFixtures } from "../lib/athena/hooks/useFootballFixtures";
import { useSelectedFixture } from "../lib/athena/hooks/useSelectedFixture";

import { Dashboard } from "../lib/athena/components/dashboard/Dashboard";
import { MatchCard } from "../lib/athena/components/dashboard/MatchCard";
import { PressureCard } from "../lib/athena/components/dashboard/PressureCard";
import { OpportunityCard } from "../lib/athena/components/dashboard/OpportunityCard";
import { InsightCard } from "../lib/athena/components/dashboard/InsightCard";
import { SimulationControls } from "../lib/athena/components/dashboard/SimulationControls";
import { SimulationTimeline } from "../lib/athena/components/dashboard/SimulationTimeline";
import { FixtureList } from "../lib/athena/components/dashboard/FixtureList";

export default function HomePage() {

  const simulation = useMatchSimulation();

  const fixtures = useFootballFixtures();

  const {
    selectedFixture,
    selectFixture,
  } = useSelectedFixture();

  const athena = useMemo(() => new Athena(), []);

  const snapshot = simulation.match.snapshotState();

  const intelligence = athena.analyze(snapshot);

  const events = [
    ...snapshot.homeEvents,
    ...snapshot.awayEvents,
  ].sort((a, b) => {

    if (a.minute !== b.minute) {

      return a.minute - b.minute;

    }

    return a.second - b.second;

  });

  return (

    <Dashboard>

      <MatchCard
        minute={
          selectedFixture
            ? selectedFixture.status.minute
            : snapshot.minute
        }
        homeTeam={
          selectedFixture
            ? selectedFixture.home.name
            : snapshot.homeTeam
        }
        awayTeam={
          selectedFixture
            ? selectedFixture.away.name
            : snapshot.awayTeam
        }
      />

      <SimulationControls
        running={simulation.running}
        onStart={simulation.start}
        onPause={simulation.pause}
        onReset={simulation.reset}
      />

      <PressureCard
        title="Mandante"
        score={intelligence.homePressure.score}
        level={intelligence.homePressure.level}
      />

      <PressureCard
        title="Visitante"
        score={intelligence.awayPressure.score}
        level={intelligence.awayPressure.level}
      />

      <OpportunityCard
        strategy={
          intelligence.dominantTeam
            ? `Pressão ${intelligence.dominantTeam}`
            : "Sem oportunidade"
        }
        confidence={intelligence.confidence}
        reason={[
          "Análise baseada na pressão ofensiva",
          "Atualização em tempo real",
        ]}
      />

      <InsightCard
        insight={
          selectedFixture
            ? `${selectedFixture.league.name} • ${selectedFixture.status.long}`
            : `Time dominante: ${intelligence.dominantTeam ?? "EMPATE"}`
        }
      />

      <SimulationTimeline
        events={events}
      />

      <FixtureList
        fixtures={fixtures}
        selectedFixture={selectedFixture}
        onSelect={selectFixture}
      />

    </Dashboard>

  );

}