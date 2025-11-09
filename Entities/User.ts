import type { Hash } from "bun";

export class User {
  id: string;
  displayName: string;
  email: string;
  passwort: Hash;
  createdAt: Date;

  constructor(displayName: string, email: string, passwort: Hash) {
    this.id = crypto.randomUUID();
    this.displayName = displayName;
    this.email = email;
    this.passwort = passwort;
    this.createdAt = new Date();
  }
}
