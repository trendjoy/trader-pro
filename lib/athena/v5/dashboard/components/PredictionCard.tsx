export default function PredictionCard({prediction}:any){

 return(

  <section
   style={{
    background:"#111827",
    padding:24,
    borderRadius:18,
   }}
  >

   <h2>

    PREDICTION

   </h2>

   <h1>

    {prediction.expectedSide}

   </h1>

   <p>

    {prediction.probability}%

   </p>

   <p>

    {prediction.window}

   </p>

  </section>

 );

}
