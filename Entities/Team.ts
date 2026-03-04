import type { Division } from "./Division";
import type { Record } from "./record";

export class Team {
  id: string; //uuid
  division: string; //uuid_fk
  // record: Record; //uuid_fk
  name: string;
  shortName: string;
  logo: string;

  constructor(
    division: string,
    // record: Record,
    name: string,
    shortName: string,
    logo: string,
  ) {
    this.id = crypto.randomUUID();
    this.division = division;
    // this.record = record;
    this.name = name;
    this.shortName = shortName;
    this.logo = logo;
  }
}
