import readlineSync from 'readline-sync';

import calc from '../games/calc.js';
import prime from '../games/prime.js';
import evenOrNot from '../games/evenOrNot.js';
import gcd from '../games/gcd.js';
import progression from '../games/progression.js';

const welcomeStr = 'Welcome to the Brain Games!\nMay I have your name? ';
const greetingStr = 'Hello,';
const rulesStrEvenGame = 'Answer "yes" if the number is even, otherwise answer "no"';
const rulesStrCalcGame = 'What is the result of the expression?';
const rulesStrGcdGame = 'Find the greatest common divisor of given numbers.';
const rulesStrProgressionGame = 'What number is missing in the progression?';
const rulesStrPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function weclome() {
  const playerName = readlineSync.question(welcomeStr);
  console.log(`${greetingStr} ${playerName}`);
  return playerName;
}

function rules(rule) {
  console.log(rule);
}

export function brainGames() {
  weclome();
}

export function brainPrime() {
  const playerName = weclome();
  rules(rulesStrPrimeGame);
  prime(3, playerName);
}

export function brainEven() {
  const playerName = weclome();
  rules(rulesStrEvenGame);
  evenOrNot(3, playerName);
}

export function calcGames() {
  const playerName = weclome();
  rules(rulesStrCalcGame);
  calc(3, playerName);
}

export function gdcGames() {
  const playerName = weclome();
  rules(rulesStrGcdGame);
  gcd(3, playerName);
}

export function progressionGames() {
  const playerName = weclome();
  rules(rulesStrProgressionGame);
  progression(3, playerName);
}
