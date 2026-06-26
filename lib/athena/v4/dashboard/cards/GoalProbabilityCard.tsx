"use client";

import { Card } from "./Card";

interface GoalProbabilityCardProps {

  probability: number;

  side: string;

}

export function GoalProbabilityCard({

  probability,

  side,

}: GoalProbabilityCardProps) {

  return (

    <Card

      title="Goal Probability"

      subtitle="Next goal prediction"

      className="col-span-12"

    >

      <div className="grid grid-cols-2 gap-8 items-center">

        <div>

          <div className="text-slate-400">

            Expected Side

          </div>

          <div className="text-5xl font-black text-emerald-400 mt-2">

            {side}

          </div>

        </div>

        <div>

          <div className="text-slate-400 mb-2">

            Probability

          </div>

          <div className="h-5 rounded-full bg-slate-800">

            <div

              className="h-full rounded-full bg-emerald-500"

              style={{

                width: `${probability}%`

              }}

            />

          </div>

          <div className="mt-4 text-4xl font-black">

            {probability}%

          </div>

        </div>

      </div>

    </Card>

  );

}