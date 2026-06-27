"use client";

import { Fixture } from "@/lib/athena/live/Fixture";
import { MatchAnalysis } from "@/lib/athena/v4/models/MatchAnalysis";

type Props = {
  fixture: Fixture;
  analysis: MatchAnalysis;
};

export default function MatchHeader({
  fixture,
  analysis,
}: Props) {
  return (
    <div
      style={{
        background:"#111827",
        borderRadius:16,
        padding:24,
        marginBottom:24,
      }}
    >
      <div
        style={{
          color:"#94a3b8",
          fontSize:14,
          marginBottom:12,
        }}
      >
        {fixture.league.name}
      </div>

      <h2
        style={{
          margin:0,
          fontSize:30,
        }}
      >
        {fixture.home.name} {fixture.score.home} × {fixture.score.away} {fixture.away.name}
      </h2>

      <div
        style={{
          display:"flex",
          gap:24,
          marginTop:16,
          color:"#cbd5e1",
        }}
      >
        <span>{analysis.minute}'</span>

        <span>
          Dominância:
          <strong> {analysis.dominantSide}</strong>
        </span>

        <span>
          Goal:
          <strong> {analysis.goal.probability.toFixed(0)}%</strong>
        </span>
      </div>
    </div>
  );
}
