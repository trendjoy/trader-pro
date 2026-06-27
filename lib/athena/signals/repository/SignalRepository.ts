import { AthenaSignal } from "../models/AthenaSignal";

const STORAGE_KEY = "athena-signals";

export class SignalRepository {

  load(): AthenaSignal[] {

    if (typeof window === "undefined") {

      return [];

    }

    const json =
      localStorage.getItem(STORAGE_KEY);

    return json
      ? JSON.parse(json)
      : [];

  }

  save(signal: AthenaSignal) {

    const signals =
      this.load();

    signals.unshift(signal);

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(signals)

    );

  }

}
