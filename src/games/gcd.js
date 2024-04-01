import getRandomNumber from '../utils.js';
import { runGameLogic, roundNumber } from '../gameLogic.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const startRound = () => {
  const num1 = getRandomNumber(1, 60);
  const num2 = getRandomNumber(1, 60);
  const question = `${num1}, ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};

const runGcdGame = () => {
  const rounds = [];
  for (let i = 0; i < roundNumber; i += 1) {
    rounds[i] = startRound();
  }
  return runGameLogic(rounds, description);
};

export default runGcdGame;
