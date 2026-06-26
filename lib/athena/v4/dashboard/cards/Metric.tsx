"use client";

interface MetricProps {

  label: string;

  value: number | string;

  color?: string;

}

export function Metric({

  label,

  value,

  color = "text-cyan-400",

}: MetricProps) {

  return (

    <div>

      <p
        className="
          text-xs
          uppercase
          text-slate-500
        "
      >

        {label}

      </p>

      <p
        className={`
          text-4xl
          font-black
          mt-2
          ${color}
        `}
      >

        {value}

      </p>

    </div>

  );

}