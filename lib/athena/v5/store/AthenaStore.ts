import { AthenaBrainResult } from "../models/AthenaBrainResult";

export class AthenaStore{

  private state:AthenaBrainResult|null=null;

  set(result:AthenaBrainResult){

    this.state=result;

  }

  get(){

    return this.state;

  }

  clear(){

    this.state=null;

  }

}
