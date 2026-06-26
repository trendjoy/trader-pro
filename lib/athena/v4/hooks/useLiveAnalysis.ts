"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Fixture } from "../../live/Fixture";

import { MatchAnalysis } from "../models/MatchAnalysis";

import { LiveAnalysisController } from "../controllers/LiveAnalysisController";

const REFRESH_INTERVAL = 30000;

export function useLiveAnalysis() {

  const controller = useMemo(
    () => new LiveAnalysisController(),
    []
  );

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [fixtures, setFixtures] =
    useState<Fixture[]>([]);

  const [selectedFixture, setSelectedFixture] =
    useState<Fixture | null>(null);

  const [analysis, setAnalysis] =
    useState<MatchAnalysis | null>(null);

  const loadFixtures =
    useCallback(async () => {

      const data =
        await controller.loadFixtures();

      setFixtures(data);

      setSelectedFixture(current => {

        if (!current) {

          return data[0] ?? null;

        }

        return (

          data.find(

            fixture =>
              fixture.id === current.id

          ) ?? current

        );

      });

    }, [controller]);

  useEffect(() => {

    loadFixtures()
      .finally(() =>
        setLoading(false)
      );

  }, [loadFixtures]);

  useEffect(() => {

    if (!selectedFixture) {

      return;

    }

    controller
      .analyzeFixture(
        selectedFixture
      )
      .then(
        setAnalysis
      );

  }, [

    controller,

    selectedFixture,

  ]);

  useEffect(() => {

    if (!selectedFixture) {

      return;

    }

    const interval =
      setInterval(async () => {

        setRefreshing(true);

        try {

          const updated =
            await controller.refreshFixture(
              selectedFixture.id
            );

          if (updated) {

            setSelectedFixture(
              updated
            );

          }

        } finally {

          setRefreshing(false);

        }

      }, REFRESH_INTERVAL);

    return () =>
      clearInterval(interval);

  }, [

    controller,

    selectedFixture,

  ]);

  function selectFixture(
    fixture: Fixture
  ) {

    setSelectedFixture(
      fixture
    );

  }

console.log("========== ATHENA ==========");
console.log("fixture:", selectedFixture);
console.log("analysis:", analysis);
console.log("============================");

  return {

    loading,

    refreshing,

    fixtures,

    selectedFixture,

    selectFixture,

    analysis,

  };

}