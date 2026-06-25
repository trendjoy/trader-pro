"use client";

import { useEffect, useState } from "react";
import { FootballProvider } from "../live/FootballProvider";
import { Fixture } from "../live/Fixture";

export function useFootballFixtures() {

  const [fixtures, setFixtures] = useState<Fixture[]>([]);

  useEffect(() => {

    const provider = new FootballProvider();

    provider
      .getTodayFixtures()
      .then(setFixtures)
      .catch(console.error);

  }, []);

  return fixtures;

}