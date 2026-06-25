"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [signals, setSignals] = useState<any[]>([]);

  useEffect(() => {
    const fetchSignals = async () => {
      const { data, error } = await supabase
        .from("signals")
        .select("*")
        .order("id", { ascending: false });

      console.log("signals:", data);

      if (!error) setSignals(data || []);
    };

    fetchSignals();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Trader Pro Dashboard</h1>

      <h2>🔥 Sinais</h2>

      {signals.length === 0 ? (
        <p>Nenhum sinal encontrado</p>
      ) : (
        signals.map((s) => (
          <div key={s.id} style={{ marginBottom: 10 }}>
            <b>{s.signal_type}</b> - {s.strategy} - {s.message}
          </div>
        ))
      )}
    </div>
  );
}
