import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

const preAnswer = 'Your answer: ';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
}

export default function prime(roundCount, playerName) {
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