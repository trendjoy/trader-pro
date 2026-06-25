import { NextResponse } from "next/server";

export async function GET() {

  const today = new Date().toISOString().split("T")[0];

  const response = await fetch(
    `${process.env.API_FOOTBALL_BASE_URL}/fixtures?date=${today}`,
    {
      headers: {
        "x-apisports-key": process.env.API_FOOTBALL_KEY!,
      },
      cache: "no-store",
    }
  );

  const json = await response.json();

  return NextResponse.json(json);
}