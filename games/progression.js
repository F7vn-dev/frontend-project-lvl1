import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

const preAnswer = 'Your answer: ';
function createArrProgression(step) {
  const progressionLength = getRandomNumber(6, 15);
  const progressionStartNumber = getRandomNumber(1, 10);
  const progressionStartArr = [progressionStartNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progressionStartArr.push(progressionStartArr[i - 1] + step);
  }
  return progressionStartArr;
}

export default function progression(roundCount, playerName) {
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
  