import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  return min + Math.floor((max - min) * Math.random());
}
const preAnswer = 'Your answer: ';

function findGcd(a, b) {
  if (b) {
    return findGcd(b, a % b);
  }
  return Math.abs(a);
}

export default function gcd(roundCount, playerName) {
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