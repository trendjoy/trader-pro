import { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#ffffff",
        padding: 32,
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <header
        style={{
          marginBottom: 32,
        }}
      >
        <h1
          style={{
            fontSize: 42,
            fontWeight: 700,
            margin: 0,
          }}
        >
          ATHENA
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: 8,
          }}
        >
          Football Intelligence Platform
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {children}
      </section>
    </main>
  );
}