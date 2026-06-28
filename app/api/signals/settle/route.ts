import { NextResponse } from "next/server";
import { SettlementEngine } from "@/lib/athena/signals/services/SettlementEngine";

export async function POST() {

  console.log("========== SETTLEMENT ROUTE ==========");

  const engine = new SettlementEngine();

  await engine.settlePendingSignals();

  console.log("========== SETTLEMENT FINISHED ==========");

  return NextResponse.json({
    success: true,
  });

}
