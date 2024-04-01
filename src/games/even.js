import getRandomNumber from '../utils.js';
import { runGame } from '../gameLogic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const question = getRandomNumber(1, 60);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

function runEvenGame() { runGame(startRound, description); }

export default runEvenGame;
