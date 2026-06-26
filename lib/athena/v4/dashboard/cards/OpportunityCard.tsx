"use client";

import { Card } from "./Card";

interface OpportunityCardProps {

  type: string;

  confidence: number;

  reasons: string[];

}

export function OpportunityCard({

  type,

  confidence,

  reasons,

}: OpportunityCardProps) {

  return (

    <Card
      title="Opportunity"
      subtitle="Detected opportunity"
      className="col-span-6"
    >

      <div className="space-y-5">

        <div>

          <div className="text-slate-400 text-sm">

            Opportunity

          </div>

          <div className="text-3xl font-black text-emerald-400">

            {type}

          </div>

        </div>

        <div>

          <div className="text-slate-400 text-sm">

            Confidence

          </div>

          <div className="text-4xl font-black">

            {(confidence * 100).toFixed(0)}%

          </div>

        </div>

        <div>

          <div className="text-slate-400 text-sm mb-2">

            Reasons

          </div>

          <ul className="space-y-2">

            {reasons.map((reason) => (

              <li
                key={reason}
                className="text-sm text-slate-300"
              >
                • {reason}
              </li>

            ))}

          </ul>

        </div>

      </div>

    </Card>

  );

}