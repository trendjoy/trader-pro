import { Signal } from "../models/Signal";

import { SignalRepository } from "../repositories/SignalRepository";

export class SignalService{

  private repository=

    new SignalRepository();

  async emit(

    signal:Signal

  ){

    return this.repository.save(
      signal
    );

  }

  async history(){

    return this.repository.list();

  }

}
