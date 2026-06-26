import { ReactNode } from "react";

interface CardProps{

  title:string;

  children:ReactNode;

  full?:boolean;

}

export default function Card({

  title,

  children,

  full,

}:CardProps){

  return(

    <div
      style={{
        background:"#111827",
        border:"1px solid #1f2937",
        borderRadius:20,
        padding:28,
        minHeight:260,
        boxShadow:"0 10px 30px rgba(0,0,0,.35)",
        gridColumn:full?"1 / -1":undefined,
      }}
    >

      <div
        style={{
          color:"#94a3b8",
          fontWeight:700,
          fontSize:13,
          letterSpacing:2,
          textTransform:"uppercase",
          marginBottom:24,
        }}
      >

        {title}

      </div>

      {children}

    </div>

  );

}
