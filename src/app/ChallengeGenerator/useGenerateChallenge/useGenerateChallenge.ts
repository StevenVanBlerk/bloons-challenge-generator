import { MONKEYS, Monkey } from "@/app/database/monkeys";

export type Challenge = { monkeys: Monkey[]; map: string };

const useGenerateChallenge = () => {
  const allMonkeys = Object.values(MONKEYS);

  const getRandomMonkeySet = () => {
    const shuffledMonkeys = allMonkeys.slice().sort(() => 0.5 - Math.random()); // Creates a shuffled copy of allMonkeys
    return shuffledMonkeys.slice(0, 3);
  };

  const getRandomMap = () => {
    return "Glacial trail";
  };

  const validateMonkeySetIsViable = (monkeys: Monkey[]) => {
    let hasAntiCamo = false;
    let hasAntiLed = false;
    monkeys.forEach((monkey) => {
      if (monkey.isAntiCamo) {
        hasAntiCamo = true;
      }
      if (monkey.isAntiLed) {
        hasAntiLed = true;
      }
    });
    if (hasAntiCamo && hasAntiLed) return true;
    return false;
  };

  const generateChallenge = () => {
    const map = getRandomMap();
    let monkeys = getRandomMonkeySet();
    let isMonkeySetViable = validateMonkeySetIsViable(monkeys);

    while (!isMonkeySetViable) {
      monkeys = getRandomMonkeySet();
      isMonkeySetViable = validateMonkeySetIsViable(monkeys);
    }
    monkeys.sort((a, b) => {
      if (a.displayName < b.displayName) return -1;
      return 1;
    });
    const challenge: Challenge = { monkeys, map };
    return challenge;
  };

  return generateChallenge;
};

export default useGenerateChallenge;
