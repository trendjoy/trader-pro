import { NextResponse } from "next/server";

export async function GET() {

  const response = await fetch(
    `${process.env.API_FOOTBALL_BASE_URL}/fixtures?live=all`,
    {
      headers: {
        "x-apisports-key": process.env.API_FOOTBALL_KEY!,
      },
      cache: "no-store",
    }
  );

  const json = await response.json();

  return NextResponse.json(json, {
    status: response.status,
  });

}
