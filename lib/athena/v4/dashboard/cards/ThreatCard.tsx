"use client";

import { Card } from "./Card";
import { MetricBar } from "./MetricBar";

interface ThreatCardProps {

  home: number;

  away: number;

  homeLevel: string;

  awayLevel: string;

}

export function ThreatCard({

  home,

  away,

  homeLevel,

  awayLevel,

}: ThreatCardProps) {

  return (

    <Card

      title="Threat"

      subtitle="Immediate danger"

      className="col-span-3"

    >

      <div className="space-y-6">

        <MetricBar

          label={`HOME • ${homeLevel}`}

          value={home}

          color="#ef4444"

        />

        <MetricBar

          label={`AWAY • ${awayLevel}`}

          value={away}

          color="#f97316"

        />

      </div>

    </Card>

  );

}