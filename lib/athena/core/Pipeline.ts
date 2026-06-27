import { AnalysisContext } from "./AnalysisContext";
import { Engine } from "./Engine";

export class Pipeline {

  private readonly engines: Engine[] = [];

  add(engine: Engine): Pipeline {
    this.engines.push(engine);
    return this;
  }

  execute(context: AnalysisContext): AnalysisContext {

    let current = context;

    for (const engine of this.engines) {
      current = engine.execute(current);
    }

    return current;
  }

}
