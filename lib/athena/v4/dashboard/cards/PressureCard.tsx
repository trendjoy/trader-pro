"use client";

import { Card } from "./Card";
import { MetricBar } from "./MetricBar";

interface PressureCardProps {

  home: number;

  away: number;

  homeLevel: string;

  awayLevel: string;

}

export function PressureCard({

  home,

  away,

  homeLevel,

  awayLevel,

}: PressureCardProps) {

  return (

    <Card

      title="Pressure"

      subtitle="Offensive intensity"

      className="col-span-3"

    >

      <div className="space-y-6">

        <div>

          <MetricBar

            label={`HOME • ${homeLevel}`}

            value={home}

            color="#22c55e"

          />

        </div>

        <div>

          <MetricBar

            label={`AWAY • ${awayLevel}`}

            value={away}

            color="#f97316"

          />

        </div>

      </div>

    </Card>

  );

}