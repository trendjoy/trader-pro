"use client";

import HeatCard from "./components/HeatCard";
import DecisionCard from "./components/DecisionCard";
import PredictionCard from "./components/PredictionCard";
import CoachCard from "./components/CoachCard";
import MatchCard from "./components/MatchCard";

export default function Dashboard({result}:any){

  return(

    <main
      style={{
        background:"#020617",
        color:"#fff",
        minHeight:"100vh",
        padding:40,
        display:"grid",
        gap:24,
      }}
    >

      <MatchCard match={result.match}/>

      <HeatCard heat={result.heat}/>

      <DecisionCard decision={result.decision}/>

      <PredictionCard prediction={result.prediction}/>

      <CoachCard coach={result.coach}/>

    </main>

  );

}
