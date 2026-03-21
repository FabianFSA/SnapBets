export class Division {
  id: string;
  conference: Conference;
  name: string;

  constructor(name: string, conference: Conference) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.conference = conference;
  }
}
export enum Conference {
  AFC = "AFC",
  NFC = "NFC",
}
