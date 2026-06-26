"use client";

import { Card } from "./Card";

interface CoachCardProps {

  text: string;

}

export function CoachCard({

  text,

}: CoachCardProps) {

  return (

    <Card
      title="ATHENA Coach"
      subtitle="Artificial Intelligence"
      className="col-span-12"
    >

      <div
        className="
          rounded-xl
          border
          border-slate-800
          bg-slate-950
          p-6
          text-lg
          leading-8
          text-slate-200
        "
      >

        {text}

      </div>

    </Card>

  );

}