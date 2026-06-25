"use client";

import { useEffect, useMemo, useState } from "react";

import { MatchSimulator } from "../simulator/MatchSimulator";

export function useMatchSimulation() {

    const simulator = useMemo(() => {

        return new MatchSimulator();

    }, []);

    const [, forceUpdate] = useState(0);

    const [running, setRunning] = useState(false);

    useEffect(() => {

        if (!running) {

            return;

        }

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

    return {

        running,

        start,

        pause,

        reset,

        simulator,

        match: simulator.getMatch(),

        clock: simulator.getClock()

    };

}