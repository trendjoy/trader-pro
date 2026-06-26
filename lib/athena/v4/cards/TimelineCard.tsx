import Card from "../ui/Card";

interface Props{

 minute:number;

}

export default function TimelineCard({

 minute,

}:Props){

 return(

  <Card
    title="Timeline"
    full
  >

   <div
    style={{
      color:"#cbd5e1",
      lineHeight:2,
    }}
   >

    {minute}' Match analysis updated.

   </div>

  </Card>

 );

}
