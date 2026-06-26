import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      ok: true,
      message: "ATHENA API funcionando",
      node: process.version,
      baseUrl: process.env.API_FOOTBALL_BASE_URL ?? null,
      hasKey: !!process.env.API_FOOTBALL_KEY,
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: String(err),
      },
      { status: 500 }
    );
  }
}
