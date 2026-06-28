import { supabaseServer } from "@/lib/supabase/server";
import { Signal } from "../models/Signal";

export class SignalRepository {

  async existsPending(
    fixtureId:number,
    market:string,
    action:string,
    selection:string
  ){

    const { count,error } = await supabaseServer

      .from("signals")

      .select("*",{
        count:"exact",
        head:true,
      })

      .eq("fixture_id",fixtureId)

      .eq("market",market)

      .eq("action",action)

      .eq("selection",selection)

      .eq("status","PENDING");

    if(error){

      console.error(error);

      return false;

    }

    return (count ?? 0)>0;

  }

  async save(signal:Signal){

    const duplicated =
      await this.existsPending(

        signal.fixtureId,

        signal.market,

        signal.action,

        signal.selection

      );

    if(duplicated){

      console.log("SIGNAL ALREADY EXISTS");

      return null;

    }

    return supabaseServer

      .from("signals")

      .insert({

        fixture_id:signal.fixtureId,

        league:signal.league,

        home:signal.home,

        away:signal.away,

        minute:signal.minute,

        market:signal.market,

        action:signal.action,

        selection:signal.selection,

        confidence:signal.confidence,

        stake:signal.stake,

        odd:signal.odd,

        status:signal.status,

        result:signal.result,

        profit:signal.profit,

        analysis:signal.analysis,

      })

      .select()

      .single();

  }

  async list(){

    console.log("========== SIGNAL LIST ==========");
    console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

    const {data,error}=await supabaseServer

      .from("signals")

      .select("*")

      .order("created_at",{

        ascending:false,

      });

    console.log("SIGNALS:");
    console.dir(data,{depth:null});

    console.log("ERROR:");
    console.dir(error,{depth:null});

    return data ?? [];

  }

  async listPending(){

    const {data,error}=await supabaseServer

      .from("signals")

      .select("*")

      .eq("status","PENDING");

    if(error){

      console.error(error);

    }

    return data ?? [];

  }

  async updateSettlement(
    id:string,
    values:any
  ){

    console.log("========== UPDATE ==========");
    console.log(id);
    console.dir(values,{depth:null});

    const {data,error}=await supabaseServer
      .from("signals")
      .update({
        ...values,
        settled_at:new Date().toISOString(),
      })
      .eq("id",id)
      .select()
      .single();

    if(error){
      console.error("UPDATE ERROR");
      console.error(error);
    }else{
      console.log("UPDATE OK");
      console.dir(data,{depth:null});
    }

    return data;

  }

}
