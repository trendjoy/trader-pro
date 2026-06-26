"use client";

import { Card } from "./Card";

interface DominanceCardProps {

  side: string;

  confidence: number;

}

export function DominanceCard({

  side,

  confidence,

}: DominanceCardProps) {

  return (

    <Card

      title="Dominance"

      subtitle="Match control"

      className="col-span-3"

    >

      <div className="flex flex-col items-center justify-center h-full">

        <div className="text-5xl font-black text-cyan-400">

          {side}

        </div>

        <div className="mt-4 text-slate-400">

          Confidence

        </div>

        <div className="text-3xl font-bold mt-2">

          {(confidence * 100).toFixed(0)}%

        </div>

      </div>

    </Card>

  );

}