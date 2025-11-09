import type { Conference } from "./Conference";

export class Division {
  id: string;
  conference: Conference;
  name: string;

  constructor(conference: Conference, name: string) {
    this.id = crypto.randomUUID();
    this.conference = conference;
    this.name = name;
  }
}
