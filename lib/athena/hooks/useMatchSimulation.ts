"use client";

import { useEffect, useMemo, useState } from "react";

import { MatchSimulator } from "../simulator/MatchSimulator";
import { Athena } from "../core/Athena";

export function useMatchSimulation() {

  const simulator = useMemo(() => new MatchSimulator(), []);

  const athena = useMemo(() => new Athena(), []);

  const [, forceUpdate] = useState(0);

  const [running, setRunning] = useState(false);

  useEffect(() => {

    if (!running) return;

    const interval = setInterval(() => {

      simulator.tick();

      forceUpdate(v => v + 1);

    }, 1000);

    return () => clearInterval(interval);

  }, [running, simulator]);

  function start() {

    simulator.start();

    setRunning(true);

  }

  function pause() {

    simulator.stop();

    setRunning(false);

  }

  function reset() {

    simulator.reset();

    setRunning(false);

    forceUpdate(v => v + 1);

  }

  const match = simulator.getMatch();

  const snapshot = match.snapshotState();

  const intelligence = athena.analyze(snapshot);

  return {

    running,

    start,

    pause,

    reset,

    match,

    snapshot,

    intelligence,

    clock: simulator.getClock(),

  };

}