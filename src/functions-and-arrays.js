// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

console.log(words.length);

function findLongestWord(array) {
  let wordLen = 0;
  let n = 0;
  if (array.length !== 0) {
    array.forEach((element, index) => {
      if (element.length > wordLen) {
        wordLen = element.length;
        n = index;
      }
    });
    return array[n];
  } else {
    return null;
  }
}

findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let sum = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for (element of array) {
      sum += element;
    }
    return sum;
  }
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  let sum = sumNumbers(array);
  return array.length === 0 ? 0 : sum / array.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, word) {
  if (array.length !== 0) {
    for (element of array) {
      if (element === word) {
        return true;
      }
    }
    return false;
  } else {
    return null;
  }
}

console.log(words2[2] === "trouble");
console.log(doesWordExist(words2, "disobedience"));
