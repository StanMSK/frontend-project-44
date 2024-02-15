import getRandomNumber from '../utils.js';

import { runGameLogic, roundNumber } from '../gameLogic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const question = getRandomNumber(1, 60);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < roundNumber; i += 1) {
    rounds[i] = startRound();
  }
  return runGameLogic(rounds, description);
};

export default runEvenGame;
