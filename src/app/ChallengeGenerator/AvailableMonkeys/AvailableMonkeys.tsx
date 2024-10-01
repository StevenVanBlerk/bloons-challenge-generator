import { Monkey } from "@/app/database/monkeys";

type AvailableMonkeysProps = { monkeys: Monkey[] };
const AvailableMonkeys = ({ monkeys }: AvailableMonkeysProps) => {
  return (
    <div>
      <h1>Monkeys:</h1>
      {monkeys.map((monkey) => (
        <div key={monkey.displayName}>{monkey.displayName}</div>
      ))}
    </div>
  );
};

export default AvailableMonkeys;
