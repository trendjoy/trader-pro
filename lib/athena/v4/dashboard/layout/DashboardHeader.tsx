"use client";

interface DashboardHeaderProps {

  homeTeam: string;

  awayTeam: string;

  minute: number;

  homeScore?: number;

  awayScore?: number;

}

export function DashboardHeader({

  homeTeam,

  awayTeam,

  minute,

  homeScore,

  awayScore,

}: DashboardHeaderProps) {

  return (

    <header
      className="
        mb-8
        border-b
        border-slate-800
        pb-6
      "
    >

      <div
        className="
          flex
          justify-between
          items-start
        "
      >

        <div>

          <h1
            className="
              text-5xl
              font-black
              tracking-tight
            "
          >

            ATHENA 4.0

          </h1>

          <p
            className="
              text-slate-400
              mt-2
            "
          >

            Football Intelligence Platform

          </p>

        </div>

        <div
          className="
            text-right
          "
        >

          <div
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-red-600
              font-bold
              text-sm
            "
          >

            LIVE

          </div>

          <div
            className="
              text-4xl
              font-black
              mt-4
            "
          >

            {minute}'

          </div>

        </div>

      </div>

      <div
        className="
          mt-8
          flex
          justify-between
          items-center
        "
      >

        <div>

          <h2
            className="
              text-3xl
              font-bold
            "
          >

            {homeTeam}

            {" × "}

            {awayTeam}

          </h2>

        </div>

        <div
          className="
            text-5xl
            font-black
            text-cyan-400
          "
        >

          {homeScore ?? 0}

          {" : "}

          {awayScore ?? 0}

        </div>

      </div>

    </header>

  );

}