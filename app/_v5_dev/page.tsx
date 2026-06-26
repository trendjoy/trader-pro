"use client";

import Dashboard from "@/lib/athena/v5/dashboard/Dashboard";
import { useAthena } from "@/lib/athena/v5/hooks/useAthena";

export default function Page(){

  const result=useAthena();

  if(!result){

    return(

      <div
        style={{
          color:"white",
          padding:40,
          background:"#020617",
          minHeight:"100vh",
        }}
      >

        ATHENA V5 Loading...

      </div>

    );

  }

  return(

    <Dashboard

      result={result}

    />

  );

}
