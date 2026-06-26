import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest
) {

  const fixture =
    request.nextUrl.searchParams.get(
      "fixture"
    );

  console.log(
    "API EVENTS - fixture:",
    fixture,
    typeof fixture
  );

  if (!fixture) {

    return NextResponse.json(
      {
        error: "Fixture não informado."
      },
      {
        status: 400
      }
    );

  }

  const fixtureId =
    Number(fixture);

  console.log(
    "API EVENTS - number:",
    fixtureId
  );

  if (
    Number.isNaN(fixtureId)
  ) {

    return NextResponse.json(
      {
        error:
          "Fixture inválido."
      },
      {
        status: 400
      }
    );

  }

  try {

    const url =
      `${process.env.API_FOOTBALL_BASE_URL}/fixtures/events?fixture=${fixtureId}`;

    console.log(
      "API URL:",
      url
    );

    const response =
      await fetch(
        url,
        {
          headers: {
            "x-apisports-key":
              process.env.API_FOOTBALL_KEY!
          },
          cache: "no-store",
        }
      );

    const json =
      await response.json();

    console.log(
      "API RESPONSE:",
      json
    );

    return NextResponse.json(
      json
    );

  } catch (error) {

    console.error(
      error
    );

    return NextResponse.json(
      {
        error: String(error)
      },
      {
        status: 500
      }
    );

  }

}