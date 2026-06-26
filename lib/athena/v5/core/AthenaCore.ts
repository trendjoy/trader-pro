import { AthenaBrain } from "../brain/AthenaBrain";

export class AthenaCore{

  private readonly brain=

    new AthenaBrain();

  analyze(

    snapshot:any,

  ){

    return this.brain.analyze(

      snapshot,

    );

  }

}
