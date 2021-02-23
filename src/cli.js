import readlineSync from 'readline-sync';

const welcomeStr = 'Welcome to the Brain Games!\nMay I have your name? ';
const greetingStr = 'Hello,';
const rulesStrEvenGame = 'Answer "yes" if the number is even, otherwise answer "no"';
const rulesStrCalcGame = 'What is the result of the expression?';
const rulesStrGcdGame = 'Find the greatest common divisor of given numbers.';
const rulesStrProgressionGame = 'What number is missing in the progression?';
const rulesStrPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const preAnswer = 'Your answer: ';

function getRandomNumber(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

function findGcd(a, b) {
  if (b) {
    return findGcd(b, a % b);
  }
  return Math.abs(a);
}

function createArrProgression(step) {
  const progressionLength = getRandomNumber(6, 15);
  const progressionStartNumber = getRandomNumber(1, 10);
  const progressionStartArr = [progressionStartNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progressionStartArr.push(progressionStartArr[i - 1] + step);
  }
  return progressionStartArr;
}

function isPrime(num) {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
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

function calc(roundCount, playerName) {
  const signArr = ['+', '-', '*'];
  for (let i = 0; i < roundCount; i += 1) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const randomSign = getRandomNumber(1, 4);
    let realAnswer;
    console.log(`Question: ${randomNumber1} ${signArr[randomSign - 1]} ${randomNumber2}`);
    const answer = readlineSync.question(preAnswer);
    if (randomSign === 1) {
      realAnswer = randomNumber1 + randomNumber2;
    } else if (randomSign === 2) {
      realAnswer = randomNumber1 - randomNumber2;
    } else realAnswer = randomNumber1 * randomNumber2;
    if (answer !== realAnswer.toString()) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
}

function gcd(roundCount, playerName) {
  for (let i = 0; i < roundCount; i += 1) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = readlineSync.question(preAnswer);
    const realAnswer = findGcd(randomNumber1, randomNumber2);
    if (realAnswer.toString() !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
}

function progression(roundCount, playerName) {
  for (let i = 0; i < roundCount; i += 1) {
    const progressionStep = getRandomNumber(2, 14);
    const arrProgression = createArrProgression(progressionStep);
    const progressionHide = getRandomNumber(0, arrProgression.length - 1);
    const realAnswer = arrProgression[progressionHide];
    arrProgression[progressionHide] = '..';
    console.log(`Question: ${arrProgression.join(' ')}`);
    const answer = readlineSync.question(preAnswer);
    if (realAnswer.toString() !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}`);
}

function prime(roundCount, playerName) {
  for (let i = 0; i < roundCount; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const realAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question(preAnswer);
    if (realAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}`);
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

export function brainPrime() {
  const playerName = readlineSync.question(welcomeStr);
  console.log(`${greetingStr} ${playerName}`);
  console.log(`${rulesStrPrimeGame}`);
  prime(3, playerName);
}

export function brainEven() {
  const playerName = readlineSync.question(welcomeStr);
  console.log(`${greetingStr} ${playerName}`);
  console.log(`${rulesStrEvenGame}`);
  playRounds(3, playerName);
}

export function calcGames() {
  const playerName = readlineSync.question(welcomeStr);
  console.log(`${greetingStr} ${playerName}`);
  console.log(`${rulesStrCalcGame}`);
  calc(3, playerName);
}

export function gdcGames() {
  const playerName = readlineSync.question(welcomeStr);
  console.log(`${greetingStr} ${playerName}`);
  console.log(`${rulesStrGcdGame}`);
  gcd(3, playerName);
}

export function progressionGames() {
  const playerName = readlineSync.question(welcomeStr);
  console.log(`${greetingStr} ${playerName}`);
  console.log(`${rulesStrProgressionGame}`);
  progression(3, playerName);
}
