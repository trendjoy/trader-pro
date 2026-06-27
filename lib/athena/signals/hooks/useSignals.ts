"use client";

import { useMemo } from "react";

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

  const signals = service.load();

  const summary = statistics.summary();

  return {

    signals,

    summary,

  };

}
