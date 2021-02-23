
export function getRandomNumber(min, max) {
    return min + Math.floor((max - min) * Math.random());
}
  
export function findGcd(a, b) {
  if (b) {
    return findGcd(b, a % b);
  }
  return Math.abs(a);
}

export function createArrProgression(step) {
  const progressionLength = getRandomNumber(6, 15);
  const progressionStartNumber = getRandomNumber(1, 10);
  const progressionStartArr = [progressionStartNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progressionStartArr.push(progressionStartArr[i - 1] + step);
  }
  return progressionStartArr;
}

export function isPrime(num) {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
}

// export {getRandomNumber, findGcd, createArrProgression, isPrime}