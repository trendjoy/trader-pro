import { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  return (
    <main
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: 32,
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: 42,
          marginBottom: 10,
        }}
      >
        ATHENA
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: 40,
        }}
      >
        Football Intelligence Platform
      </p>

      <div
        style={{
          display: "grid",
          gap: 20,
        }}
      >
        {children}
      </div>
    </main>
  );
}