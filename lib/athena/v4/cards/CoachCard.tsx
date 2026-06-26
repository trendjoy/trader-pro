import Card from "../ui/Card";

interface Props {

  reasons:string[];

  opportunity:string;

}

export default function CoachCard({

  reasons,

  opportunity,

}:Props){

  return(

    <Card
      title="ATHENA Coach"
      full
    >

      <div
        style={{
          color:"#e2e8f0",
          lineHeight:1.8,
          fontSize:16,
        }}
      >

        <strong>

          AI Recommendation

        </strong>

        <br/><br/>

        {opportunity}

        <br/><br/>

        <ul>

          {reasons.map((item,index)=>(

            <li key={index}>

              {item}

            </li>

          ))}

        </ul>

      </div>

    </Card>

  );

}
