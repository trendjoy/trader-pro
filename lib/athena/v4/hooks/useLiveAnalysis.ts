"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { Fixture } from "../../live/Fixture";
import { MatchAnalysis } from "../models/MatchAnalysis";

const REFRESH_INTERVAL = 30000;

export function useLiveAnalysis() {

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

      try {

        const response =
          await fetch(
            "/api/live/fixtures",
            {
              cache: "no-store",
            }
          );

        if (!response.ok) {

          throw new Error(
            "Erro ao carregar fixtures."
          );

        }

        const data =
          await response.json();

        setFixtures(data);

        setSelectedFixture(current =>

          !current

            ? data[0] ?? null

            : data.find(
                (fixture: Fixture) =>
                  fixture.id === current.id
              ) ?? current

        );

      } catch (error) {

        console.error(error);

      }

    }, []);

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

    fetch(

      `/api/live/analysis?fixture=${selectedFixture.id}`,

      {
        cache: "no-store",
      }

    )

      .then(async response => {

        if (!response.ok) {

          throw new Error(
            "Erro ao analisar partida."
          );

        }

        return response.json();

      })

      .then(result => {

        setAnalysis(result);

      })

      .catch(console.error);

  }, [

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

          const response =

            await fetch(

              "/api/live/fixtures",

              {

                cache: "no-store",

              }

            );

          const json =

            await response.json();

          const updated =

            (json.response ?? []).find(

              (fixture: Fixture) =>

                fixture.id ===
                selectedFixture.id

            ) ?? null;

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

    selectedFixture,

  ]);

  function selectFixture(
    fixture: Fixture
  ) {

    setSelectedFixture(
      fixture
    );

  }

  return {

    loading,

    refreshing,

    fixtures,

    selectedFixture,

    selectFixture,

    analysis,

  };

}
