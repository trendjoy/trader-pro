"use client";

import { Card } from "./Card";
import { MetricBar } from "./MetricBar";

interface MomentumCardProps {

  home: number;

  away: number;

  homeLevel: string;

  awayLevel: string;

}

export function MomentumCard({

  home,

  away,

  homeLevel,

  awayLevel,

}: MomentumCardProps) {

  return (

    <Card

      title="Momentum"

      subtitle="Attack evolution"

      className="col-span-3"

    >

      <div className="space-y-6">

        <MetricBar

          label={`HOME • ${homeLevel}`}

          value={home}

          color="#06b6d4"

        />

        <MetricBar

          label={`AWAY • ${awayLevel}`}

          value={away}

          color="#a855f7"

        />

      </div>

    </Card>

  );

}