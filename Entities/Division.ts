export class Division {
  id: string;
  conference: Conference;
  name: string;

  constructor(name: string, conference: Conference) {
    this.id = name.toLowerCase().replace(" ", "-");
    this.name = name;
    this.conference = conference;
  }
}
export enum Conference {
  AFC = "AFC",
  NFC = "NFC",
}
