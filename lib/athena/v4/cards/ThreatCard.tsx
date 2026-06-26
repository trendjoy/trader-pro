import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";

interface Props{

 home:number;

 away:number;

}

export default function ThreatCard({

 home,

 away,

}:Props){

 return(

  <Card title="Threat">

   <div>

    HOME

    <ProgressBar
      value={home}
      color="#f59e0b"
    />

    <div>{home}</div>

   </div>

   <div
    style={{
      marginTop:24,
    }}
   >

    AWAY

    <ProgressBar
      value={away}
      color="#dc2626"
    />

    <div>{away}</div>

   </div>

  </Card>

 );

}
