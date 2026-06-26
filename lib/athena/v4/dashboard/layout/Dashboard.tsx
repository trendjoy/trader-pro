"use client";

import { ReactNode } from "react";

interface DashboardProps {

  children: ReactNode;

}

export function Dashboard({

  children,

}: DashboardProps) {

  return (

    <main
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >

      <div
        className="
          max-w-[1800px]
          mx-auto
          px-8
          py-8
        "
      >

        {children}

      </div>

    </main>

  );

}