type DisplayName =
  | "Dart monkey"
  | "Boomerang monkey"
  | "Bomb shooter"
  | "Tack shooter"
  | "Ice monkey"
  | "Glue gunner"
  | "Sniper monkey"
  | "Monkey sub"
  | "Monkey buccaneer";

export type Monkey = {
  displayName: DisplayName;
  cost: number;
  isAntiCamo: boolean;
  isAntiLed: boolean;
  hotkey: string;
};

export const MONKEYS: Record<DisplayName, Monkey> = {
  "Dart monkey": {
    displayName: "Dart monkey",
    cost: 200,
    isAntiCamo: true,
    isAntiLed: true,
    hotkey: "Q",
  },
  "Boomerang monkey": {
    displayName: "Boomerang monkey",
    cost: 315,
    isAntiCamo: false,
    isAntiLed: true,
    hotkey: "W",
  },
  "Bomb shooter": {
    displayName: "Bomb shooter",
    cost: 375,
    isAntiCamo: false,
    isAntiLed: true,
    hotkey: "E",
  },
  "Tack shooter": {
    displayName: "Tack shooter",
    cost: 260,
    isAntiCamo: false,
    isAntiLed: false, // questionable
    hotkey: "R",
  },
  "Ice monkey": {
    displayName: "Ice monkey",
    cost: 500,
    isAntiCamo: false,
    isAntiLed: true, // questionable
    hotkey: "T",
  },
  "Glue gunner": {
    displayName: "Glue gunner",
    cost: 315,
    isAntiCamo: false,
    isAntiLed: true,
    hotkey: "Y",
  },
  "Sniper monkey": {
    displayName: "Sniper monkey",
    cost: 450,
    isAntiCamo: true,
    isAntiLed: true,
    hotkey: "Z",
  },
  "Monkey sub": {
    displayName: "Monkey sub",
    cost: 325,
    isAntiCamo: true, // questionable
    isAntiLed: true,
    hotkey: "X",
  },
  "Monkey buccaneer": {
    displayName: "Monkey buccaneer",
    cost: 400,
    isAntiCamo: true,
    isAntiLed: true,
    hotkey: "C",
  },
};
