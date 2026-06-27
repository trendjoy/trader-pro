import { AthenaDecision } from "../../models/AthenaDecision";

export interface Strategy {

  id: string;

  name: string;

  version: string;

  description: string;

  execute(decision: AthenaDecision): boolean;

}
