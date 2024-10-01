"use client";

import { useState } from "react";
import AvailableMonkeys from "./AvailableMonkeys";
import useGenerateChallenge from "./useGenerateChallenge";
import { Challenge } from "./useGenerateChallenge";

const ChallengeGenerator = () => {
  const generateChallenge = useGenerateChallenge();
  const [challenge, setChallenge] = useState<null | Challenge>(null);
  return (
    <div>
      <button
        onClick={() => {
          setChallenge(generateChallenge());
        }}
      >
        Give me a challenge
      </button>
      <br />
      <br />
      {!!challenge && (
        <div>
          <h1>Map:</h1>
          <div>{challenge.map}</div>
          <br />
          <AvailableMonkeys monkeys={challenge.monkeys} />
        </div>
      )}
    </div>
  );
};

export default ChallengeGenerator;
