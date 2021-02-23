import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

const preAnswer = 'Your answer: ';

export default function calc(roundCount, playerName) {
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