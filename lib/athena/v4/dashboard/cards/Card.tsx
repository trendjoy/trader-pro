"use client";

import { ReactNode } from "react";

interface CardProps {

  title: string;

  subtitle?: string;

  children: ReactNode;

  className?: string;

}

export function Card({

  title,

  subtitle,

  children,

  className = "",

}: CardProps) {

  return (

    <section
      className={`
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur
        p-6
        shadow-xl
        ${className}
      `}
    >

      <div className="mb-6">

        <h2
          className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-slate-400
            font-bold
          "
        >

          {title}

        </h2>

        {

          subtitle && (

            <p
              className="
                text-slate-500
                text-sm
                mt-1
              "
            >

              {subtitle}

            </p>

          )

        }

      </div>

      {children}

    </section>

  );

}