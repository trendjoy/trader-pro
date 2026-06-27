import { AthenaSignal } from "../models/AthenaSignal";

const STORAGE_KEY = "athena-signals";

export class SignalRepository {

  load(): AthenaSignal[] {

    if (typeof window === "undefined") {
      return [];
    }

    const json = localStorage.getItem(STORAGE_KEY);

    return json
      ? JSON.parse(json)
      : [];
  }

  save(signal: AthenaSignal): void {

    const signals = this.load();

    signals.unshift(signal);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(signals)
    );
  }

  update(updatedSignal: AthenaSignal): void {

    const signals = this.load();

    const updated = signals.map(signal =>
      signal.id === updatedSignal.id
        ? updatedSignal
        : signal
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  }

  delete(id: string): void {

    const signals = this.load();

    const filtered = signals.filter(
      signal => signal.id !== id
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(filtered)
    );
  }

  clear(): void {

    localStorage.removeItem(STORAGE_KEY);

  }

}
