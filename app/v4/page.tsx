"use client";

import Dashboard from "@/lib/athena/v4/dashboard/Dashboard";
import { useLiveAnalysis } from "@/lib/athena/v4/hooks/useLiveAnalysis";

export default function AthenaV4Page() {

  const live = useLiveAnalysis();

  if (
    live.loading ||
    !live.selectedFixture ||
    !live.analysis
  ) {

    return (
      <main
        style={{
          padding:40,
          color:"white",
          background:"#050816",
          minHeight:"100vh",
        }}
      >
        Loading ATHENA...
      </main>
    );

  }

  return (

    <Dashboard

      analysis={live.analysis}

      fixture={live.selectedFixture}

    />

  );

}
