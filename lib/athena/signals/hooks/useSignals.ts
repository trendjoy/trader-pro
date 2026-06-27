"use client";

import { useEffect, useMemo, useState } from "react";

import { SignalService } from "../services/SignalService";
import { SignalStatistics } from "../services/SignalStatistics";

export function useSignals() {

  const service = useMemo(
    () => new SignalService(),
    []
  );

  const statistics = useMemo(
    () => new SignalStatistics(),
    []
  );

  const [signals, setSignals] = useState<any[]>([]);

  useEffect(() => {

    service
      .history()
      .then(setSignals)
      .catch(console.error);

  }, [service]);

  const summary = statistics.summary();

  return {

    signals,

    summary,

  };

}
