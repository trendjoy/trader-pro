"use client";

import { useState } from "react";
import { Fixture } from "../live/Fixture";

export function useSelectedFixture() {

  const [selectedFixture, setSelectedFixture] =
    useState<Fixture | null>(null);

  function selectFixture(fixture: Fixture) {

    setSelectedFixture(fixture);

  }

  return {

    selectedFixture,

    selectFixture,

  };

}