"use client";

import styles from "./page.module.css";
import { useLiveAnalysis } from "@/lib/athena/v4/hooks/useLiveAnalysis";

export default function AthenaV4Page() {

  const live = useLiveAnalysis();

  if (live.loading) {
    return (
      <main className={styles.page}>
        <h1>ATHENA 4.0</h1>
        <p>Carregando partidas...</p>
      </main>
    );
  }

  if (!live.selectedFixture || !live.analysis) {
    return (
      <main className={styles.page}>
        <h1>ATHENA 4.0</h1>
        <p>Nenhuma partida encontrada.</p>
      </main>
    );
  }

  const fixture = live.selectedFixture;
  const analysis = live.analysis;

  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <header className={styles.header}>
          <h1 className={styles.title}>ATHENA 4.0</h1>
          <p className={styles.subtitle}>
            Football Intelligence Platform
          </p>
        </header>

        <section className={styles.match}>
          <div className={styles.teams}>
            {fixture.home.name} × {fixture.away.name}
          </div>

          <div className={styles.minute}>
            {analysis.minute}'
          </div>
        </section>

        <section className={styles.grid}>

          <Metric
            title="HOME PRESSURE"
            value={analysis.home.pressure}
            label={analysis.home.pressureLevel}
          />

          <Metric
            title="AWAY PRESSURE"
            value={analysis.away.pressure}
            label={analysis.away.pressureLevel}
          />

          <Metric
            title="HOME MOMENTUM"
            value={analysis.home.momentum}
            label={analysis.home.momentumLevel}
          />

          <Metric
            title="AWAY MOMENTUM"
            value={analysis.away.momentum}
            label={analysis.away.momentumLevel}
          />

          <Metric
            title="HOME THREAT"
            value={analysis.home.threat}
            label={analysis.home.threatLevel}
          />

          <Metric
            title="AWAY THREAT"
            value={analysis.away.threat}
            label={analysis.away.threatLevel}
          />

          <Metric
            title="GOAL"
            value={analysis.goal.probability}
            label={analysis.goal.expectedSide}
          />

          <Metric
            title="TRADING"
            value={Math.round(analysis.trading.confidence * 100)}
            label={analysis.trading.action}
          />

          <div className={`${styles.card} ${styles.full}`}>

            <div className={styles.cardTitle}>
              ATHENA COACH
            </div>

            <p className={styles.coach}>
              {analysis.opportunity.type}
            </p>

            <ul className={styles.list}>
              {analysis.opportunity.reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>

          </div>

        </section>

      </div>
    </main>
  );

}

function Metric({
  title,
  value,
  label,
}: {
  title: string;
  value: number;
  label: string;
}) {

  return (

    <div className={styles.card}>

      <div className={styles.cardTitle}>
        {title}
      </div>

      <div className={styles.value}>
        {value}
      </div>

      <div className={styles.badge}>
        {label}
      </div>

      <div className={styles.bar}>
        <div
          className={styles.fill}
          style={{
            width: `${Math.min(value, 100)}%`,
          }}
        />
      </div>

    </div>

  );

}
