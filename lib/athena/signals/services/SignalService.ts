import { AthenaSignal } from "../models/AthenaSignal";
import { SignalRepository } from "../repository/SignalRepository";

export class SignalService {

  private readonly repository =
    new SignalRepository();

  save(
    signal: AthenaSignal
  ) {

    this.repository.save(
      signal
    );

  }

  load(): AthenaSignal[] {

    return this.repository.load();

  }

}
