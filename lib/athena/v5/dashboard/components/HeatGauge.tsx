export default function HeatGauge({heat}:any){

  return(

    <section
      style={{
        background:"#111827",
        borderRadius:24,
        padding:30
      }}
    >

      <h3>HEAT INDEX</h3>

      <div
        style={{
          marginTop:20,
          height:18,
          background:"#1e293b",
          borderRadius:10,
          overflow:"hidden"
        }}
      >

        <div
          style={{
            width:`${heat.score}%`,
            height:"100%",
            background:
              heat.score>80
              ?"#ef4444"
              :heat.score>60
              ?"#f59e0b"
              :"#22c55e"
          }}
        />

      </div>

      <h1
        style={{
          fontSize:54,
          marginTop:20
        }}
      >
        {heat.score}
      </h1>

      <p>{heat.level}</p>

    </section>

  );

}
