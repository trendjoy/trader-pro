import { supabase } from "@/lib/supabase/client";

import { Signal } from "../models/Signal";

export class SignalRepository {

  async save(
    signal:Signal
  ){

    return supabase
      .from("signals")
      .insert(signal);

  }

  async list(){

    const {data}=

      await supabase

      .from("signals")

      .select("*")

      .order(
        "created_at",
        {
          ascending:false,
        }
      );

    return data ?? [];

  }

}
