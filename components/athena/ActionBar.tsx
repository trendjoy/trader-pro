"use client";

interface Props {
  onOpenMatchCenter?: () => void;
}

const style = {
  background:"#2563eb",
  color:"#fff",
  border:"none",
  borderRadius:10,
  padding:"12px 20px",
  cursor:"pointer",
  fontWeight:700,
} as const;

export default function ActionBar({
  onOpenMatchCenter,
}: Props){

  return(

    <div
      style={{
        display:"flex",
        gap:12,
        flexWrap:"wrap",
        marginBottom:30,
      }}
    >

      <button
        style={style}
        onClick={()=>location.href="/v4"}
      >
        🏠 Dashboard
      </button>

      {onOpenMatchCenter && (

        <button
          style={style}
          onClick={onOpenMatchCenter}
        >
          🎯 Match Center
        </button>

      )}

      <button
        style={style}
        onClick={()=>location.href="/signals"}
      >
        📊 Signals
      </button>

      <button
        style={style}
        onClick={()=>location.href="/v4/debug"}
      >
        🐞 Debug
      </button>

      <button
        style={style}
        onClick={()=>location.reload()}
      >
        🔄 Refresh
      </button>

    </div>

  );

}
