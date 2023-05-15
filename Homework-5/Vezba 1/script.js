// CountBs

function countBs(sentence) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toUpperCase() === 'B') {
      count++;
    }
  }
  return count;
}

let sentence = 'He shot the ball at the buzzer. The balloon popped. The bat hung upside down in the tree. They served beans at the picnic.';
let result1 = countBs(sentence);
console.log(`The letter 'B' appears ${result1} times in the sentence.`);

// Bonus

function countLetter(sentence, letter) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toUpperCase() === letter.toUpperCase()) {
      count++;
    }
  }
  return count;
}

let letterToCheck = 'H';
let result2 = countLetter(sentence, letterToCheck);
console.log(`The letter '${letterToCheck}' appears ${result2} times in the sentence.`);
