"use client";

import { MatchAnalysis } from "@/lib/athena/v4/models/MatchAnalysis";

export default function TradingPanel({
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

      <h3>ATHENA Signal</h3>

      <p>
        <strong>Market:</strong> {analysis.trading.market}
      </p>

      <p>
        <strong>Action:</strong> {analysis.trading.action}
      </p>

      <p>
        <strong>Selection:</strong> {analysis.trading.selection}
      </p>

      <p>
        <strong>Confidence:</strong> {analysis.trading.confidence}%
      </p>

      <p>
        <strong>Stake:</strong> {analysis.trading.stake}
      </p>

    </div>

  );

}
