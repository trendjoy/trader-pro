import Card from "../ui/Card";
import Metric from "../ui/Metric";
import ProgressBar from "../ui/ProgressBar";
import Badge from "../ui/Badge";

interface Props{

 score:number;

 level:string;

 color:string;

}

export default function HeatIndexCard({

 score,

 level,

 color,

}:Props){

 return(

  <Card title="ATHENA Heat Index">

   <Metric

    value={score}

   />

   <Badge

    text={level}

    color={color}

   />

   <ProgressBar

    value={score}

    color={color}

   />

  </Card>

 );

}
