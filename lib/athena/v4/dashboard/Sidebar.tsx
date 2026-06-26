export default function Sidebar() {

  return (

    <aside
      style={{
        background:"#111827",
        border:"1px solid #1f2937",
        borderRadius:20,
        padding:24,
        minHeight:900,
      }}
    >

      <h3
        style={{
          marginTop:0,
        }}
      >

        LIVE SCANNER

      </h3>

      <div
        style={{
          color:"#64748b",
          marginBottom:20,
        }}
      >

        ATHENA Live Monitor

      </div>

      {[1,2,3,4,5].map((item)=>(

        <div
          key={item}
          style={{
            padding:16,
            marginBottom:16,
            background:"#0f172a",
            borderRadius:12,
            border:"1px solid #1e293b",
          }}
        >

          <div
            style={{
              fontWeight:700,
            }}
          >

            Match {item}

          </div>

          <div
            style={{
              color:"#64748b",
              marginTop:6,
            }}
          >

            Waiting analysis...

          </div>

        </div>

      ))}

    </aside>

  );

}
