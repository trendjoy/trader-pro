interface Props{

 fixture:any;

 minute:number;

}

export default function Header({

 fixture,

 minute,

}:Props){

 return(

  <header
   style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:30,
    paddingBottom:20,
    borderBottom:"1px solid #1e293b",
   }}
  >

   <div>

    <div
     style={{
      fontSize:34,
      fontWeight:800,
      letterSpacing:2,
     }}
    >

      ATHENA

    </div>

    <div
     style={{
      color:"#64748b",
      marginTop:6,
     }}
    >

      Football Intelligence Platform

    </div>

   </div>

   <div
    style={{
      textAlign:"center",
    }}
   >

     <div
      style={{
        fontSize:26,
        fontWeight:700,
      }}
     >

      {fixture.home.name}

      {" × "}

      {fixture.away.name}

     </div>

     <div
      style={{
        marginTop:10,
        color:"#38bdf8",
        fontSize:42,
        fontWeight:800,
      }}
     >

      {minute}'

     </div>

   </div>

   <div
    style={{
      textAlign:"right",
    }}
   >

      <div
       style={{
        color:"#22c55e",
        fontWeight:700,
       }}
      >

       ● LIVE

      </div>

      <div
       style={{
        marginTop:8,
        color:"#94a3b8",
       }}
      >

       Pipeline Active

      </div>

   </div>

  </header>

 );

}
