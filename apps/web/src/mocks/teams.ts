import { Divisions } from "./divisions";

function findDivision(id: string) {
  const division = Divisions.find((d) => d.id === id);
  if (!division) throw new Error(`Unknown division id: ${id}`);
  return division;
}

const AFC_EAST = findDivision("AFC_EAST");
const AFC_NORTH = findDivision("AFC_NORTH");
const AFC_SOUTH = findDivision("AFC_SOUTH");
const AFC_WEST = findDivision("AFC_WEST");
const NFC_EAST = findDivision("NFC_EAST");
const NFC_NORTH = findDivision("NFC_NORTH");
const NFC_SOUTH = findDivision("NFC_SOUTH");
const NFC_WEST = findDivision("NFC_WEST");

export const Teams = {
  // --- AFC EAST ---
  bills: {
    id: "1",
    division: AFC_EAST,
    name: "Buffalo Bills",
    shortName: "Bills",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
  },
  dolphins: {
    id: "2",
    division: AFC_EAST,
    name: "Miami Dolphins",
    shortName: "Dolphins",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
  },
  patriots: {
    id: "3",
    division: AFC_EAST,
    name: "New England Patriots",
    shortName: "Patriots",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
  },
  jets: {
    id: "4",
    division: AFC_EAST,
    name: "New York Jets",
    shortName: "Jets",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
  },

  // --- AFC NORTH ---
  ravens: {
    id: "5",
    division: AFC_NORTH,
    name: "Baltimore Ravens",
    shortName: "Ravens",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
  },
  bengals: {
    id: "6",
    division: AFC_NORTH,
    name: "Cincinnati Bengals",
    shortName: "Bengals",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
  },
  browns: {
    id: "7",
    division: AFC_NORTH,
    name: "Cleveland Browns",
    shortName: "Browns",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
  },
  steelers: {
    id: "8",
    division: AFC_NORTH,
    name: "Pittsburgh Steelers",
    shortName: "Steelers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
  },

  // --- AFC SOUTH ---
  texans: {
    id: "9",
    division: AFC_SOUTH,
    name: "Houston Texans",
    shortName: "Texans",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
  },
  colts: {
    id: "10",
    division: AFC_SOUTH,
    name: "Indianapolis Colts",
    shortName: "Colts",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
  },
  jaguars: {
    id: "11",
    division: AFC_SOUTH,
    name: "Jacksonville Jaguars",
    shortName: "Jaguars",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
  },
  titans: {
    id: "12",
    division: AFC_SOUTH,
    name: "Tennessee Titans",
    shortName: "Titans",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
  },

  // --- AFC WEST ---
  broncos: {
    id: "13",
    division: AFC_WEST,
    name: "Denver Broncos",
    shortName: "Broncos",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
  },
  chiefs: {
    id: "14",
    division: AFC_WEST,
    name: "Kansas City Chiefs",
    shortName: "Chiefs",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
  },
  raiders: {
    id: "15",
    division: AFC_WEST,
    name: "Las Vegas Raiders",
    shortName: "Raiders",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
  },
  chargers: {
    id: "16",
    division: AFC_WEST,
    name: "Los Angeles Chargers",
    shortName: "Chargers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
  },

  // --- NFC EAST ---
  cowboys: {
    id: "17",
    division: NFC_EAST,
    name: "Dallas Cowboys",
    shortName: "Cowboys",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
  },
  giants: {
    id: "18",
    division: NFC_EAST,
    name: "New York Giants",
    shortName: "Giants",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
  },
  eagles: {
    id: "19",
    division: NFC_EAST,
    name: "Philadelphia Eagles",
    shortName: "Eagles",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
  },
  commanders: {
    id: "20",
    division: NFC_EAST,
    name: "Washington Commanders",
    shortName: "Commanders",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
  },

  // --- NFC NORTH ---
  bears: {
    id: "21",
    division: NFC_NORTH,
    name: "Chicago Bears",
    shortName: "Bears",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
  },
  lions: {
    id: "22",
    division: NFC_NORTH,
    name: "Detroit Lions",
    shortName: "Lions",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
  },
  packers: {
    id: "23",
    division: NFC_NORTH,
    name: "Green Bay Packers",
    shortName: "Packers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
  },
  vikings: {
    id: "27",
    division: NFC_NORTH,
    name: "Minnesota Vikings",
    shortName: "Vikings",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
  },

  // --- NFC SOUTH ---
  falcons: {
    id: "28",
    division: NFC_SOUTH,
    name: "Atlanta Falcons",
    shortName: "Falcons",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
  },
  panthers: {
    id: "29",
    division: NFC_SOUTH,
    name: "Carolina Panthers",
    shortName: "Panthers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
  },
  saints: {
    id: "30",
    division: NFC_SOUTH,
    name: "New Orleans Saints",
    shortName: "Saints",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
  },
  buccaneers: {
    id: "31",
    division: NFC_SOUTH,
    name: "Tampa Bay Buccaneers",
    shortName: "Buccaneers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
  },

  // --- NFC WEST ---
  cardinals: {
    id: "32",
    division: NFC_WEST,
    name: "Arizona Cardinals",
    shortName: "Cardinals",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
  },
  rams: {
    id: "24",
    division: NFC_WEST,
    name: "Los Angeles Rams",
    shortName: "Rams",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
  },
  fourtyNiners: {
    id: "25",
    division: NFC_WEST,
    name: "San Francisco 49ers",
    shortName: "49ers",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
  },
  seahawks: {
    id: "26",
    division: NFC_WEST,
    name: "Seattle Seahawks",
    shortName: "Seahawks",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
  },
};
