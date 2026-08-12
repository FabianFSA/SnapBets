export interface Division {
  id: string;
  conference: Conference;
  name: string;
}

export enum Conference {
  AFC = "AFC",
  NFC = "NFC",
}
