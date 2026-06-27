"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MatchCenter({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.55)",
          zIndex: 90,
        }}
      />

      <aside
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          width: 520,
          height: "100vh",
          background: "#0b1220",
          borderLeft: "1px solid #1e293b",
          padding: 24,
          overflowY: "auto",
          zIndex: 100,
          color: "white",
        }}
      >
        <button
          onClick={onClose}
          style={{
            float: "right",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <h2>ATHENA Match Center</h2>

        <hr />

        <div style={{ marginTop: 20 }}>
          <h3>Pressure</h3>
          <p>Loading...</p>

          <h3>Momentum</h3>
          <p>Loading...</p>

          <h3>Goal Probability</h3>
          <p>Loading...</p>

          <h3>Decision</h3>
          <p>Loading...</p>
        </div>
      </aside>
    </>
  );
}
