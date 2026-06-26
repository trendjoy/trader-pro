export default function HeatCard({heat}:any){

 return(

  <section
   style={{
    background:"#111827",
    padding:24,
    borderRadius:18,
   }}
  >

   <h2>

    HEAT

   </h2>

   <h1>

    {heat.score}

   </h1>

   <p>

    {heat.level}

   </p>

  </section>

 );

}
