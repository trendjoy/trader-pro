import { NextResponse } from "next/server";

import { FixtureMapper } from "@/lib/athena/live/FixtureMapper";

const mapper = new FixtureMapper();

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

  const fixtures = json.response.map(
    (item: any) => mapper.map(item)
  );

  return NextResponse.json(fixtures, {
    status: response.status,
  });

}
