import { AthenaRuntime } from "../kernel/AthenaRuntime";

export class LiveAnalysisService {

  private readonly runtime = new AthenaRuntime();

  analyze(snapshot:any){

    return this.runtime.analyze(snapshot);

  }

}
