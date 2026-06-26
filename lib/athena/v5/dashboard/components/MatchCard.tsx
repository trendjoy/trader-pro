export default function MatchCard({match}:any){

 return(

  <section
   style={{
    background:"#111827",
    padding:24,
    borderRadius:18,
   }}
  >

   <h2>

    {match.home}

    {" "}

    {match.homeScore}

    x

    {match.awayScore}

    {" "}

    {match.away}

   </h2>

   <h3>

    {match.minute}'

   </h3>

  </section>

 );

}
