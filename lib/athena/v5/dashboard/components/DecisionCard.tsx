export default function DecisionCard({decision}:any){

 return(

  <section
   style={{
    background:"#111827",
    padding:24,
    borderRadius:18,
   }}
  >

   <h2>

    DECISION

   </h2>

   <h1>

    {decision.action}

   </h1>

   <p>

    Confidence

    {" "}

    {decision.confidence}%

   </p>

  </section>

 );

}
