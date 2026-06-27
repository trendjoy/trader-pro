import { AnalysisContext } from "./AnalysisContext";

export interface Engine {

  execute(
    context: AnalysisContext
  ): AnalysisContext;

}
