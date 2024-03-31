import readlineSync from 'readline-sync';

export const roundNumber = 3;

export const runGameLogic = (rounds, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < roundNumber; i += 1) {
    const [question, answer] = rounds[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export function runGame(startRound, description) {
  const rounds = [];
  for (let i = 0; i < roundNumber; i += 1) {
    rounds[i] = startRound();
  }
  return runGameLogic(rounds, description);
}
