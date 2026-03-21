import type { Division } from "./Division";
// import { Record } from "./Record";

export class Team {
  id: string; //uuid
  division: Division; //uuid_fk
  // record: Record; //uuid_fk
  name: string;
  shortName: string;
  logo: string;

  constructor(
    division: Division,
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
