export interface Signal {

  fixtureId:number;

  league:string;

  home:string;

  away:string;

  minute:number;

  market:string;

  action:string;

  selection:string;

  confidence:number;

  stake:number;

  odd:number|null;

  status:
    |"PENDING"
    |"GREEN"
    |"RED";

  result?:string;

  profit?:number;

  analysis:any;

}
