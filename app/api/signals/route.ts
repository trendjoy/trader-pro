import { NextRequest, NextResponse } from "next/server";

import { SignalService } from "@/lib/athena/signals/services/SignalService";

const service = new SignalService();

export async function POST(
  request: NextRequest
) {

  try {

    const signal = await request.json();

    await service.emit(signal);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }

}
