"use client";

import { MatchAnalysis } from "@/lib/athena/v4/models/MatchAnalysis";

export default function ThreatPanel({
  analysis,
}:{
  analysis: MatchAnalysis;
}){

  return(

    <div
      style={{
        background:"#111827",
        borderRadius:16,
        padding:20,
        marginBottom:20,
      }}
    >

      <h3>Threat</h3>

      <p>
        Home: {analysis.home.threat}
      </p>

      <p>
        Away: {analysis.away.threat}
      </p>

    </div>

  );

}
