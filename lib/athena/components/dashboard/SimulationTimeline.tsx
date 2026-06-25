import { MatchEvent } from "../../models/match-event";

interface SimulationTimelineProps {
  events: MatchEvent[];
}

export function SimulationTimeline({
  events,
}: SimulationTimelineProps) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: 16,
        padding: 24,
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: 20,
          color: "#94a3b8",
          fontSize: 16,
        }}
      >
        TIMELINE DA PARTIDA
      </h2>

      {events.length === 0 ? (
        <p style={{ color: "#94a3b8" }}>
          Nenhum evento registrado.
        </p>
      ) : (
        events.map((event) => (
          <div
            key={event.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #334155",
            }}
          >
            <span>
              {event.minute}'
              {String(event.second).padStart(2, "0")}
            </span>

            <span>{event.team}</span>

            <span>{event.type}</span>
          </div>
        ))
      )}
    </div>
  );
}