import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  const fixture = request.nextUrl.searchParams.get("fixture");

  if (!fixture) {

    return NextResponse.json(
      { error: "Fixture não informado." },
      { status: 400 }
    );

  }

  try {

    const response = await fetch(

      `${process.env.API_FOOTBALL_BASE_URL}/fixtures/statistics?fixture=${fixture}`,

      {

        headers: {

          "x-apisports-key": process.env.API_FOOTBALL_KEY!

        },

        cache: "no-store"

      }

    );

    const json = await response.json();

    return NextResponse.json(json);

  } catch (error) {

    return NextResponse.json(

      {

        success: false,

        error: String(error)

      },

      {

        status: 500

      }

    );

  }

}