"use client";

import { useEffect, useMemo, useState } from "react";
import { SignalStatistics } from "../services/SignalStatistics";

export function useSignals() {

  const statistics = useMemo(
    () => new SignalStatistics(),
    []
  );

  const [signals, setSignals] = useState<any[]>([]);

  useEffect(() => {

    fetch("/api/signals")
      .then((response) => response.json())
      .then(setSignals)
      .catch(console.error);

  }, []);

  const summary = statistics.summary();

  return {
    signals,
    summary,
  };

}
