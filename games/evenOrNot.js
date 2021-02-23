import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

const preAnswer = 'Your answer: ';

export default function evenOrNot(roundCount, playerName) {
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