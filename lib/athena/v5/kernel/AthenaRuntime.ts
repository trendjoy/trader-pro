import { AthenaKernel } from "./AthenaKernel";
import { AthenaStore } from "../store/AthenaStore";
import { EventBus } from "../events/EventBus";

export class AthenaRuntime{

  private readonly kernel=
    new AthenaKernel();

  private readonly store=
    new AthenaStore();

  private readonly bus=
    new EventBus();

  analyze(snapshot:any){

    const result=

      this.kernel.analyze(snapshot);

    this.store.set(result);

    this.bus.emit(

      "brain.updated",

      result,

    );

    return result;

  }

  getStore(){

    return this.store;

  }

  getBus(){

    return this.bus;

  }

}
