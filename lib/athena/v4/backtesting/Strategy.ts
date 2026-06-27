export interface Strategy {

  name: string;

  version: string;

  execute(...args: unknown[]): unknown;

}
