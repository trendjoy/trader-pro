import { AthenaCore } from "../core/AthenaCore";

export class AthenaKernel{

  private readonly core =
    new AthenaCore();

  analyze(
    snapshot:any,
  ){
    return this.core.analyze(snapshot);
  }

}
