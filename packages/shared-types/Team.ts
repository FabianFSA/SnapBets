import type { Division } from "./Division";

export interface Team {
  id: string; //uuid
  division: Division; //uuid_fk
  // record: Record; //uuid_fk
  name: string;
  shortName: string;
  logo: string;
}
