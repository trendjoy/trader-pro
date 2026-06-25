import { Fixture } from "../../live/Fixture";

interface Props {

  fixtures: Fixture[];

  selectedFixture: Fixture | null;

  onSelect: (fixture: Fixture) => void;

}

export function FixtureList({

  fixtures,

  selectedFixture,

  onSelect,

}: Props) {

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
          marginBottom: 24,
        }}
      >
        Jogos do dia
      </h2>

      {fixtures.map((fixture) => {

        const selected =
          selectedFixture?.id === fixture.id;

        return (

          <div
            key={fixture.id}
            onClick={() => onSelect(fixture)}
            style={{

              cursor: "pointer",

              padding: 16,

              marginBottom: 16,

              borderRadius: 12,

              border: selected
                ? "2px solid #38bdf8"
                : "1px solid #334155",

              background: selected
                ? "#0f3d5e"
                : "transparent",

              transition: "0.2s",

            }}
          >

            <strong>

              {fixture.home.name}

              {" x "}

              {fixture.away.name}

            </strong>

            <br />

            <span>

              {fixture.score.home}

              {" x "}

              {fixture.score.away}

            </span>

            <br />

            <small>

              {fixture.league.name}

              {" • "}

              {fixture.status.long}

            </small>

          </div>

        );

      })}

    </div>

  );

}