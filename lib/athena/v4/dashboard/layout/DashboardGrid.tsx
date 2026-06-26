"use client";

import { ReactNode } from "react";

interface DashboardGridProps {

  children: ReactNode;

}

export function DashboardGrid({

  children,

}: DashboardGridProps) {

  return (

    <section
      className="
        grid
        grid-cols-12
        gap-6
      "
    >

      {children}

    </section>

  );

}