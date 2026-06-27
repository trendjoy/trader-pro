"use client";

import { MatchAnalysis } from "@/lib/athena/v4/models/MatchAnalysis";

export default function MatchStats({
  analysis,
}:{
  analysis: MatchAnalysis;
}){

  return(

    <div
      style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:16,
        marginBottom:20,
      }}
    >

      <Card
        title="Dominância"
        value={analysis.dominantSide}
      />

      <Card
        title="Goal Probability"
        value={`${analysis.goal.probability.toFixed(0)}%`}
      />

      <Card
        title="Opportunity"
        value={analysis.opportunity.type}
      />

    </div>

  );

}

function Card({
  title,
  value,
}:any){

  return(

    <div
      style={{
        background:"#111827",
        borderRadius:14,
        padding:18,
      }}
    >

      <div
        style={{
          color:"#94a3b8",
          marginBottom:10,
        }}
      >
        {title}
      </div>

      <strong
        style={{
          fontSize:22,
        }}
      >
        {value}
      </strong>

    </div>

  );

}
