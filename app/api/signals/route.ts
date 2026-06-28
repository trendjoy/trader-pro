import { NextRequest, NextResponse } from "next/server";
import { SignalService } from "@/lib/athena/signals/services/SignalService";

const service = new SignalService();

export async function GET() {
  try {
    const signals = await service.history();

    return NextResponse.json(signals);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

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
      { success: false },
      { status: 500 }
    );
  }
}
