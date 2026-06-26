import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";

interface Props {

  home:number;

  away:number;

}

export default function PressureCard({

  home,

  away,

}:Props){

  return(

    <Card title="Pressure">

      <div>

        HOME

        <ProgressBar
          value={home}
          color="#22c55e"
        />

        <div>{home}</div>

      </div>

      <div
        style={{
          marginTop:25,
        }}
      >

        AWAY

        <ProgressBar
          value={away}
          color="#ef4444"
        />

        <div>{away}</div>

      </div>

    </Card>

  );

}
