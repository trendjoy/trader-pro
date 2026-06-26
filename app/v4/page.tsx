"use client";

import { useLiveAnalysis } from "@/lib/athena/v4/hooks/useLiveAnalysis";

export default function AthenaV4Page() {

  const live =
    useLiveAnalysis();

  if (live.loading) {

    return (

      <main
        style={{
          padding: 40,
          color: "#fff",
          background: "#0f172a",
          minHeight: "100vh",
        }}
      >

        Carregando partidas...

      </main>

    );

  }

  if (!live.selectedFixture) {

    return (

      <main
        style={{
          padding: 40,
          color: "#fff",
          background: "#0f172a",
          minHeight: "100vh",
        }}
      >

        Nenhuma partida encontrada.

      </main>

    );

  }

  if (!live.analysis) {

    return (

      <main
        style={{
          padding: 40,
          color: "#fff",
          background: "#0f172a",
          minHeight: "100vh",
        }}
      >

        Calculando ATHENA V4...

      </main>

    );

  }

  const analysis =
    live.analysis;

  return (

    <main
      style={{
        background: "#020617",
        color: "#fff",
        minHeight: "100vh",
        padding: 40,
        fontFamily: "sans-serif",
      }}
    >

      <h1>ATHENA 4.0</h1>

      <h2>

        {live.selectedFixture.home.name}

        {" x "}

        {live.selectedFixture.away.name}

      </h2>

      <hr />

      <h3>Minuto</h3>

      <p>

        {analysis.minute}'

      </p>

      <hr />

      <h3>Pressão</h3>

      <p>

        Home: {analysis.home.pressure}

      </p>

      <p>

        Away: {analysis.away.pressure}

      </p>

      <p>

        Home Level: {analysis.home.pressureLevel}

      </p>

      <p>

        Away Level: {analysis.away.pressureLevel}

      </p>

      <hr />

      <h3>Momentum</h3>

      <p>

        Home: {analysis.home.momentum}

      </p>

      <p>

        Away: {analysis.away.momentum}

      </p>

      <p>

        Home Level: {analysis.home.momentumLevel}

      </p>

      <p>

        Away Level: {analysis.away.momentumLevel}

      </p>

      <hr />

      <h3>Dominância</h3>

      <p>

        {analysis.dominantSide}

      </p>

      <hr />

      <h3>Probabilidade de Gol</h3>

      <p>

        {analysis.goal.probability}%

      </p>

      <p>

        {analysis.goal.expectedSide}

      </p>

      <hr />

      <h3>Oportunidade</h3>

      <p>

        {analysis.opportunity.type}

      </p>

      <p>

        {(analysis.opportunity.confidence * 100).toFixed(1)}%

      </p>

      <ul>

        {analysis.opportunity.reasons.map(

          (reason: string, index: number) => (

            <li key={index}>

              {reason}

            </li>

          )

        )}

      </ul>

      <hr />

      <h3>Trading</h3>

      <p>

        Mercado: {analysis.trading.market}

      </p>

      <p>

        Ação: {analysis.trading.action}

      </p>

      <p>

        Seleção: {analysis.trading.selection}

      </p>

      <p>

        Stake: {analysis.trading.stake}

      </p>

      <p>

        Confiança: {(analysis.trading.confidence * 100).toFixed(1)}%

      </p>

    </main>

  );

}