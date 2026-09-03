export interface Team {
  id: string; //uuid
  divisionId: string; //uuid_fk
  // recordId: string; //uuid_fk
  name: string;
  shortName: string;
  logo: string;
}
