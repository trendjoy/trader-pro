export interface AthenaModule{

  name:string;

  version:string;

}

export class ModuleRegistry{

  readonly modules:AthenaModule[]=[

    {
      name:"ContextEngine",
      version:"1.0",
    },

    {
      name:"HeatEngine",
      version:"1.0",
    },

    {
      name:"SignalEngine",
      version:"1.0",
    },

    {
      name:"PredictionEngine",
      version:"1.0",
    },

    {
      name:"ConfidenceEngine",
      version:"1.0",
    },

    {
      name:"DecisionEngine",
      version:"1.0",
    },

    {
      name:"CoachEngine",
      version:"1.0",
    }

  ];

}
