interface Props {

  fixture: any;

  fixtures: any[];

  onSelectFixture: (fixture: any) => void;

}

export default function Sidebar({

  fixture,

  fixtures,

  onSelectFixture,

}: Props) {

  return (

    <aside
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >

      <div
        style={{
          background: "#111827",
          borderRadius: 18,
          padding: 20,
        }}
      >

        <h2>LIVE SCANNER</h2>

        <div
          style={{
            color: "#64748b",
            marginBottom: 20,
          }}
        >
          ATHENA Live Monitor
        </div>

        {fixtures.slice(0, 5).map((match: any) => {

          const selected = fixture?.id === match.id;

          return (

            <div
              key={match.id}
              onClick={() => {
  console.log("CLICK:", match.id, match.home.name, "x", match.away.name);
  onSelectFixture(match);
}}
              style={{
                background: selected ? "#0f3d5e" : "#1f2937",
                border: selected
                  ? "2px solid #38bdf8"
                  : "1px solid #374151",
                cursor: "pointer",
                borderRadius: 12,
                padding: 14,
                marginBottom: 14,
                transition: "0.2s",
              }}
            >

              <strong>{match.home.name}</strong>

              <div
                style={{
                  margin: "8px 0",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                {match.score.home} × {match.score.away}
              </div>

              <strong>{match.away.name}</strong>

              <div
                style={{
                  marginTop: 8,
                  color: "#94a3b8",
                }}
              >
                {match.status.minute}'
              </div>

            </div>

          );

        })}

      </div>

    </aside>

  );

}
