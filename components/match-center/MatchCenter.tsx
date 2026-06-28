"use client";

import { Fixture } from "@/lib/athena/live/Fixture";
import { MatchAnalysis } from "@/lib/athena/v4/models/MatchAnalysis";

import MatchHeader from "./MatchHeader";
import MatchStats from "./MatchStats";
import PressurePanel from "./PressurePanel";
import MomentumPanel from "./MomentumPanel";
import ThreatPanel from "./ThreatPanel";
import TradingPanel from "./TradingPanel";
import Timeline from "./Timeline";

type Props = {
  open: boolean;
  onClose: () => void;

  fixture: Fixture;
  analysis: MatchAnalysis;
};

export function MatchCenter({
  open,
  onClose,
  fixture,
  analysis,
}: Props) {

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position:"fixed",
          inset:0,
          background:"rgba(0,0,0,.55)",
          zIndex:90,
        }}
      />

      <aside
        style={{
          position:"fixed",
          right:0,
          top:0,
          width:580,
          height:"100vh",
          background:"#0b1220",
          borderLeft:"1px solid #1e293b",
          overflowY:"auto",
          padding:24,
          zIndex:100,
          color:"white",
        }}
      >

        <button
          onClick={onClose}
          style={{
            float:"right",
            cursor:"pointer",
            border:"none",
            background:"transparent",
            color:"white",
            fontSize:20,
          }}
        >
          ✕
        </button>

        <MatchHeader
          fixture={fixture}
          analysis={analysis}
        />

        <MatchStats
          analysis={analysis}
        />

        <PressurePanel
          analysis={analysis}
        />

        <MomentumPanel
          analysis={analysis}
        />

        <ThreatPanel
          analysis={analysis}
        />

        <TradingPanel
          analysis={analysis}
        />

        <Timeline/>

      </aside>

    </>
  );

}
