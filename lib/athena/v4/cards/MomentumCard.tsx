import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";

interface Props{

 home:number;

 away:number;

}

export default function MomentumCard({

 home,

 away,

}:Props){

 return(

  <Card title="Momentum">

   <div>

    HOME

    <ProgressBar
      value={home}
      color="#0ea5e9"
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
      color="#8b5cf6"
    />

    <div>{away}</div>

   </div>

  </Card>

 );

}
