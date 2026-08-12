import { Conference, Division } from "../../Entities/Division";

export const Divisions = {
  NFC_WEST: new Division("NFC West", Conference.NFC),
  NFC_EAST: new Division("NFC East", Conference.NFC),
  NFC_NORTH: new Division("NFC North", Conference.NFC),
  NFC_SOUTH: new Division("NFC South", Conference.NFC),
  AFC_WEST: new Division("AFC West", Conference.AFC),
  AFC_EAST: new Division("AFC East", Conference.AFC),
  AFC_NORTH: new Division("AFC North", Conference.AFC),
  AFC_SOUTH: new Division("AFC South", Conference.AFC),
} as const;

export const allDivisions = Object.values(Divisions);
