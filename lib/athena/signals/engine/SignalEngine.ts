import { Signal } from "../models/Signal";
import { SignalService } from "../services/SignalService";

export class SignalEngine {

  private readonly service =
    new SignalService();

  async emit(
    signal: Signal
  ) {

    if (signal.action === "NONE") {

      console.log("SIGNAL WAIT");

      return;

    }

    console.log(
      "SIGNAL ACCEPTED"
    );

    return this.service.emit(
      signal
    );

  }

}
