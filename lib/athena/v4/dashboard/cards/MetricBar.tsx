"use client";

interface MetricBarProps {

  label: string;

  value: number;

  color: string;

}

export function MetricBar({

  label,

  value,

  color,

}: MetricBarProps) {

  return (

    <div className="space-y-2">

      <div className="flex justify-between">

        <span className="text-sm text-slate-400">

          {label}

        </span>

        <span className="font-bold">

          {value}

        </span>

      </div>

      <div className="h-2 rounded-full bg-slate-800">

        <div

          className="h-full rounded-full transition-all"

          style={{

            width: `${value}%`,

            background: color,

          }}

        />

      </div>

    </div>

  );

}