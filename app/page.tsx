"use client";

import { useMatchSimulation } from "../lib/athena/hooks/useMatchSimulation";
import { useLiveAnalysis } from "../lib/athena/hooks/useLiveAnalysis";

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

  const live = useLiveAnalysis();

  const snapshot =
    live.snapshot ??
    simulation.snapshot;

  const intelligence =
    live.intelligence ??
    simulation.intelligence;

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
        minute={snapshot.minute}
        homeTeam={snapshot.homeTeam}
        awayTeam={snapshot.awayTeam}
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
          "Pipeline ATHENA",
          "Atualização em tempo real",
        ]}
      />

      <InsightCard
        insight={
          live.insight ??
          `Time dominante: ${intelligence.dominantTeam ?? "EMPATE"}`
        }
      />

      <SimulationTimeline
        events={events}
      />

      <FixtureList
        fixtures={live.fixtures}
        selectedFixture={live.selectedFixture}
        onSelect={live.selectFixture}
      />

    </Dashboard>

  );

}