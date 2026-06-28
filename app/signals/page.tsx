"use client";

import { useSignals } from "@/lib/athena/signals/hooks/useSignals";
import ActionBar from "@/components/athena/ActionBar";

export default function SignalsPage() {

  const {

    signals,

    summary,

  } = useSignals();

  return (

    <main
      style={{
        background:"#050816",
        color:"white",
        minHeight:"100vh",
        padding:40,
      }}
    >

      <h1
        style={{
          marginBottom:30,
        }}
      >
        ATHENA SIGNAL CENTER
      </h1>

      <ActionBar />


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(6,1fr)",
          gap:20,
          marginBottom:40,
        }}
      >

        <Card
          title="TOTAL"
          value={summary.total}
        />

        <Card
          title="PENDING"
          value={summary.pending}
        />

        <Card
          title="GREENS"
          value={summary.greens}
        />

        <Card
          title="REDS"
          value={summary.reds}
        />

        <Card
          title="WIN RATE"
          value={`${summary.winRate.toFixed(1)}%`}
        />

        <Card
          title="ROI"
          value={`${summary.roi.toFixed(2)}u`}
        />

      </div>

      <table
        style={{
          width:"100%",
          borderCollapse:"collapse",
        }}
      >

        <thead>

          <tr>

            <Th>Data</Th>

            <Th>Jogo</Th>

            <Th>Ação</Th>

            <Th>Mercado</Th>

            <Th>Confiança</Th>

            <Th>Status</Th>

          </tr>

        </thead>

        <tbody>

          {signals.map(signal=>(

            <tr
              key={signal.id}
            >

              <Td>{signal.date}</Td>

              <Td>

                {signal.home}

                {" x "}

                {signal.away}

              </Td>

              <Td>{signal.action}</Td>

              <Td>{signal.market}</Td>

              <Td>

                {(signal.confidence*100).toFixed(0)}%

              </Td>

              <Td>{signal.status}</Td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>

  );

}

function Card({

  title,

  value,

}:{

  title:string;

  value:any;

}){

  return(

    <div
      style={{
        background:"#111827",
        borderRadius:16,
        padding:20,
      }}
    >

      <div
        style={{
          color:"#64748b",
          marginBottom:12,
        }}
      >

        {title}

      </div>

      <div
        style={{
          fontSize:34,
          fontWeight:700,
        }}
      >

        {value}

      </div>

    </div>

  );

}

function Th({

  children,

}:any){

  return(

    <th
      style={{
        textAlign:"left",
        padding:14,
        borderBottom:"1px solid #1e293b",
      }}
    >

      {children}

    </th>

  );

}

function Td({

  children,

}:any){

  return(

    <td
      style={{
        padding:14,
        borderBottom:"1px solid #1e293b",
      }}
    >

      {children}

    </td>

  );

}
