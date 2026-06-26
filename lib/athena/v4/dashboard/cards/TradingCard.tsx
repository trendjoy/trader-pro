"use client";

import { Card } from "./Card";

interface TradingCardProps {

  market: string;

  action: string;

  selection: string;

  stake: string;

  confidence: number;

}

export function TradingCard({

  market,

  action,

  selection,

  stake,

  confidence,

}: TradingCardProps) {

  return (

    <Card
      title="Trading Signal"
      subtitle="Recommended operation"
      className="col-span-6"
    >

      <div className="grid grid-cols-2 gap-6">

        <div>

          <div className="text-slate-400 text-sm">

            Market

          </div>

          <div className="text-xl font-bold">

            {market}

          </div>

        </div>

        <div>

          <div className="text-slate-400 text-sm">

            Action

          </div>

          <div className="text-xl font-bold text-emerald-400">

            {action}

          </div>

        </div>

        <div>

          <div className="text-slate-400 text-sm">

            Selection

          </div>

          <div>

            {selection}

          </div>

        </div>

        <div>

          <div className="text-slate-400 text-sm">

            Stake

          </div>

          <div>

            {stake}

          </div>

        </div>

      </div>

      <div className="mt-8">

        <div className="text-slate-400 text-sm">

          Confidence

        </div>

        <div className="text-5xl font-black text-cyan-400">

          {(confidence * 100).toFixed(0)}%

        </div>

      </div>

    </Card>

  );

}