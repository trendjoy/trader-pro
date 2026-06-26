"use client";

import Header from "./Header";
import MainLayout from "./MainLayout";
import Footer from "./Footer";

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

interface DashboardProps{

 analysis:any;

 fixture:any;

 fixtures:any[];

}

export default function Dashboard({

 analysis,

 fixture,

 fixtures,

}:DashboardProps){

 return(

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

   <MainLayout

    fixture={fixture}

    fixtures={fixtures}

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

   <Footer/>

  </main>

 );

}
