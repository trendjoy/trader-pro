"use client";
import { useState } from "react";

import Header from "./Header";
import MainLayout from "./MainLayout";
import Footer from "./Footer";

import { MatchCenter } from "@/components/match-center/MatchCenter";
import ActionBar from "@/components/athena/ActionBar";

import MatchCard from "../cards/MatchCard";
import DominanceCard from "../cards/DominanceCard";
import GoalProbabilityCard from "../cards/GoalProbabilityCard";
import OpportunityCard from "../cards/OpportunityCard";
import PressureCard from "../cards/PressureCard";
import MomentumCard from "../cards/MomentumCard";
import ThreatCard from "../cards/ThreatCard";
import TradingCard from "../cards/TradingCard";
import CoachCard from "../cards/CoachCard";
import TimelineCard from "../cards/TimelineCard";
interface DashboardProps {
  analysis: any;
  fixture: any;
  fixtures: any[];
  onSelectFixture: (fixture: any) => void;
}

const actionButton = {
  background:"#2563eb",
  color:"white",
  border:"none",
  borderRadius:10,
  padding:"12px 22px",
  cursor:"pointer",
  fontWeight:700,
} as const;

export default function Dashboard({
  analysis,
  fixture,
  fixtures,
  onSelectFixture,
}: DashboardProps) {

  const [openMatchCenter, setOpenMatchCenter] =
    useState(false);

  return (

    <main
      style={{
        background:"#050816",
        minHeight:"100vh",
        color:"white",
        padding:30,
      }}
    >

      <Header
        fixture={fixture}
        minute={analysis.minute}
      />

      
<ActionBar
  onOpenMatchCenter={() => setOpenMatchCenter(true)}
/>


      <MainLayout
        fixture={fixture}
        fixtures={fixtures}
        onSelectFixture={onSelectFixture}
      >

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))",
            gap:24,
          }}
        >

          <MatchCard
            home={fixture.home.name}
            away={fixture.away.name}
            homeScore={fixture.score.home}
            awayScore={fixture.score.away}
            minute={analysis.minute}
          />

          <DominanceCard
            side={analysis.dominantSide}
            confidence={analysis.trading.confidence}
          />

          <GoalProbabilityCard
            probability={analysis.goal.probability}
            expectedSide={analysis.goal.expectedSide}
          />

          <OpportunityCard
            type={analysis.opportunity.type}
            confidence={analysis.opportunity.confidence}
            reasons={analysis.opportunity.reasons}
          />

          <PressureCard
            home={analysis.home.pressure}
            away={analysis.away.pressure}
          />

          <MomentumCard
            home={analysis.home.momentum}
            away={analysis.away.momentum}
          />

          <ThreatCard
            home={analysis.home.threat}
            away={analysis.away.threat}
          />

          <TradingCard
            market={analysis.trading.market}
            action={analysis.trading.action}
            selection={analysis.trading.selection}
            confidence={analysis.trading.confidence}
            stake={analysis.trading.stake}
          />

          <CoachCard
            opportunity={analysis.opportunity.type}
            reasons={analysis.opportunity.reasons}
          />

          <TimelineCard
            minute={analysis.minute}
          />

        </div>

      </MainLayout>

      <MatchCenter
        open={openMatchCenter}
        onClose={() => setOpenMatchCenter(false)}
        fixture={fixture}
        analysis={analysis}
      />

      <Footer/>

    </main>

  );

}
