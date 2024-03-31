import getRandomNumber from '../utils.js';
import { runGame } from '../gameLogic.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 19);
  const step = getRandomNumber(1, 5);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression, hiddenNumber];
};

const startRound = () => {
  const [progression, hiddenNumber] = generateProgression();
  const question = progression.join(' ');
  const correctAnswer = hiddenNumber.toString();
  return [question, correctAnswer];
};

function runProGame() { runGame(startRound, description); }

export default runProGame;
