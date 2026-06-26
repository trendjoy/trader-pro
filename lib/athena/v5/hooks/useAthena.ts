"use client";

import { useEffect, useState } from "react";
import { LiveAnalysisService } from "../services/LiveAnalysisService";

export function useAthena(){

  const [result,setResult]=useState<any>(null);

  useEffect(()=>{

    const service=new LiveAnalysisService();

    const snapshot={

      id:1,

      homeName:"Chelsea",

      awayName:"Liverpool",

      scoreHome:1,

      scoreAway:1,

      minute:68,

      homeShots:14,

      awayShots:11,

      homePossession:56,

      awayPossession:44,

    };

    setResult(

      service.analyze(snapshot)

    );

  },[]);

  return result;

}
