"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };

    getUser();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Trader Dashboard</h1>

      {user ? (
        <div>
          <p>Bem-vindo 👋</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Carregando usuário...</p>
      )}

      <hr />

      <div style={{ marginTop: 20 }}>
        <h2>💰 Painel Trading</h2>

        <div style={{ display: "grid", gap: 10 }}>
          <div>📈 Lucro hoje: R$ 0</div>
          <div>📉 Perda hoje: R$ 0</div>
          <div>📊 Operações: 0</div>
        </div>
      </div>
    </div>
  );
}
