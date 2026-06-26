export class ExplainabilityEngine{

  build(

    decision:string,

    heat:number,

    state:string,

  ){

    return{

      title:decision,

      explanation:[

        `Game State: ${state}`,

        `Heat Index: ${heat}`,

        `Decision: ${decision}`,

      ],

    };

  }

}
