export default function CoachCard({coach}:any){

 return(

  <section
   style={{
    background:"#111827",
    padding:24,
    borderRadius:18,
   }}
  >

   <h2>

    ATHENA COACH

   </h2>

   <p>

    {coach.summary}

   </p>

   <ul>

    {coach.reasons?.map((r:string)=>(

      <li key={r}>

        {r}

      </li>

    ))}

   </ul>

  </section>

 );

}
