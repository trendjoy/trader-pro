interface Props{

  fixture:any;

  fixtures:any[];

}

export default function Sidebar({

  fixtures,

}:Props){

  return(

    <aside
      style={{
        display:"flex",
        flexDirection:"column",
        gap:16,
      }}
    >

      <div
        style={{
          background:"#111827",
          borderRadius:18,
          padding:20,
        }}
      >

        <h2>LIVE SCANNER</h2>

        <div
          style={{
            color:"#64748b",
            marginBottom:20,
          }}
        >
          ATHENA Live Monitor
        </div>

        {fixtures.slice(0,5).map((match:any)=>(

          <div
            key={match.id}
            style={{
              background:"#1f2937",
              borderRadius:12,
              padding:14,
              marginBottom:14,
            }}
          >

            <strong>

              {match.home.name}

            </strong>

            <div
              style={{
                margin:"8px 0",
                fontSize:18,
                fontWeight:700,
              }}
            >

              {match.score.home}

              {" × "}

              {match.score.away}

            </div>

            <strong>

              {match.away.name}

            </strong>

            <div
              style={{
                marginTop:8,
                color:"#94a3b8",
              }}
            >

              {match.status.minute}'

            </div>

          </div>

        ))}

      </div>

    </aside>

  );

}
