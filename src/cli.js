import readlineSync from 'readline-sync';

const welcomeStr = 'Welcome to the Brain Games!\nMay I have your name? ';
const greetingStr = 'Hello,';
const rulesStr = 'Answer "yes" if the number is even, otherwise answer "no"';
const preAnswer = 'Your answer: ';

function getRandomNumber(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

function playRounds(roundCount, playerName) {
  for (let i = 0; i < roundCount; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question(preAnswer);
    const evenOrNot = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (evenOrNot !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${evenOrNot}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
}

export function brainGames() {
  const playerName = readlineSync.question(welcomeStr);
  console.log(`${greetingStr} ${playerName}`);
}

export function brainEven() {
  const playerName = readlineSync.question(welcomeStr);
  console.log(`${greetingStr} ${playerName}`);
  console.log(`${rulesStr}`);
  playRounds(3, playerName);
}
