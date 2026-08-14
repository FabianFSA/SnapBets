import { Conference } from "@snapbets/shared-types/Division.ts";

export const Divisions = [
  { id: "NFC_WEST", name: "NFC West", conference: Conference.NFC },
  { id: "NFC_EAST", name: "NFC East", conference: Conference.NFC },
  { id: "NFC_NORTH", name: "NFC North", conference: Conference.NFC },
  { id: "NFC_SOUTH", name: "NFC South", conference: Conference.NFC },
  { id: "AFC_WEST", name: "AFC West", conference: Conference.AFC },
  { id: "AFC_EAST", name: "AFC East", conference: Conference.AFC },
  { id: "AFC_NORTH", name: "AFC North", conference: Conference.AFC },
  { id: "AFC_SOUTH", name: "AFC South", conference: Conference.AFC },
] as const;

export const allDivisions = Object.values(Divisions);
