import { NextRequest, NextResponse } from "next/server";

import { LiveAnalysisController } from "@/lib/athena/v4/controllers/LiveAnalysisController";

const controller =
  new LiveAnalysisController();

export async function GET(
  request: NextRequest
) {

  const fixtureId =
    Number(
      request.nextUrl.searchParams.get(
        "fixture"
      )
    );

  const fixture =
    await controller.refreshFixture(
      fixtureId
    );

  if (!fixture) {

    return NextResponse.json(
      {
        error: "Fixture not found",
      },
      {
        status: 404,
      }
    );

  }

  const analysis =
    await controller.analyzeFixture(
      fixture
    );

  return NextResponse.json(
    analysis
  );

}
