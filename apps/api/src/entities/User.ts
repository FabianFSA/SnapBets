import type { Hash } from "bun";
import type { User as UserShape } from "@snapbets/shared-types";

export class User implements UserShape {
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
