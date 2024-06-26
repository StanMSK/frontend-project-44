import getRandomNumber from '../utils.js';
import { runGame } from '../gameLogic.js';

const description = 'What is the result of the expression?';

const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  const randIndex = getRandomNumber(0, operators.length - 1);
  return operators[randIndex];
};

const calculate = (operator, operand1, operand2) => {
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      result = null;
      break;
  }
  return result;
};

const startRound = () => {
  const operand1 = getRandomNumber(1, 60);
  const operand2 = getRandomNumber(1, 60);
  const operator = getRandOperator();
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = calculate(operator, operand1, operand2).toString();
  return [question, correctAnswer];
};

function runCalcGame() { runGame(startRound, description); }

export default runCalcGame;
