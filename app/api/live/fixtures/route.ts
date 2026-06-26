import { NextResponse } from "next/server";

export async function GET() {

  try {

    const baseUrl = process.env.API_FOOTBALL_BASE_URL;
    const apiKey = process.env.API_FOOTBALL_KEY;

    console.log("========== API FOOTBALL ==========");
    console.log("BASE URL:", baseUrl);
    console.log("KEY EXISTS:", !!apiKey);

    if (!baseUrl) {

      return NextResponse.json(
        {
          error: "API_FOOTBALL_BASE_URL não definida"
        },
        { status: 500 }
      );

    }

    if (!apiKey) {

      return NextResponse.json(
        {
          error: "API_FOOTBALL_KEY não definida"
        },
        { status: 500 }
      );

    }

    const url = `${baseUrl}/fixtures?live=all`;

    console.log("REQUEST:", url);

    const response = await fetch(
      url,
      {
        method: "GET",
        headers: {
          "x-apisports-key": apiKey,
          "Accept": "application/json",
        },
        cache: "no-store",
      }
    );

    const body = await response.text();

    console.log("STATUS:", response.status);
    console.log("BODY:", body);

    if (!response.ok) {

      return NextResponse.json(
        {
          error: "API Football Error",
          status: response.status,
          body,
        },
        {
          status: response.status,
        }
      );

    }

    return NextResponse.json(
      JSON.parse(body)
    );

  } catch (error) {

    console.error("LIVE FIXTURES ERROR:", error);

    return NextResponse.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );

  }

}
