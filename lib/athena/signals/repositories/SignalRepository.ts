import { supabase } from "@/lib/supabase/client";

import { Signal } from "../models/Signal";

export class SignalRepository {

  async save(
    signal: Signal
  ) {

    console.log("========== SIGNAL ==========");
    console.dir(signal, { depth: null });

    const result = await supabase

      .from("signals")

      .insert({

        fixture_id: signal.fixtureId,

        league: signal.league,

        home: signal.home,

        away: signal.away,

        minute: signal.minute,

        market: signal.market,

        action: signal.action,

        selection: signal.selection,

        confidence: signal.confidence,

        stake: signal.stake,

        odd: signal.odd,

        status: signal.status,

        result: signal.result,

        profit: signal.profit,

        analysis: signal.analysis,

      })

      .select()

      .single();

    console.log("========== SUPABASE RESULT ==========");
    console.dir(result, { depth: null });

    if (result.error) {

      console.error("========== SUPABASE ERROR ==========");
      console.error(result.error);

    } else {

      console.log("========== SIGNAL SAVED ==========");

    }

    return result;

  }

  async list() {

    const { data, error } = await supabase

      .from("signals")

      .select("*")

      .order("created_at", {
        ascending: false,
      });

    if (error) {

      console.error(error);

    }

    return data ?? [];

  }

}
