export default function DecisionCenter({result}:any){

  return(

    <section
      style={{
        background:"#111827",
        borderRadius:24,
        padding:40,
        display:"flex",
        flexDirection:"column",
        gap:20,
        border:"1px solid #1f2937"
      }}
    >

      <div
        style={{
          fontSize:14,
          letterSpacing:2,
          color:"#94a3b8"
        }}
      >
        ATHENA DECISION
      </div>

      <div
        style={{
          fontSize:56,
          fontWeight:800,
          color:"#22c55e"
        }}
      >
        {result.decision.action}
      </div>

      <div
        style={{
          fontSize:20
        }}
      >
        Confidence {result.decision.confidence}%
      </div>

      <div
        style={{
          color:"#94a3b8",
          lineHeight:1.8
        }}
      >
        {result.coach.summary}
      </div>

    </section>

  );

}
