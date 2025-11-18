// celcius to feh
const celToFeh = (cel) => {
  return cel * (9 / 5) + 32;
};

let feh = celToFeh(30);
// console.log(feh);

// sum of the numbers in an array
const arr = [1, 2, 3, 4, 8, 6, 7, 9, 10];
const sumOfN = (arr) => {
  let sum = 0;
  arr.forEach((val) => {
    sum += val;
  });
  return sum;
};
// console.log(sumOfN(arr));

//average of the array
const averageCalc = () => {
  console.log(sumOfN(arr) / arr.length);
};
// averageCalc()

//even number in an array
const evenNumber = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(evenNumber(arr));

// string reversal
const stringReverse = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  return rev;
};
let result = stringReverse("sahil");
// console.log(result);

//vowel counter - a e i o u
const vowelCalculator = (str) => {
  let count = 0;
  let newStr = str.split("");
  newStr.forEach((val) => {
    if (
      val == "a" ||
      val == "e" ||
      val == "o" ||
      val == "u" ||
      val == "i" ||
      val == "A" ||
      val == "E" ||
      val == "O" ||
      val == "U" ||
      val == "I"
    ) {
      count = count + 1;
    }
  });
  return count;
};
console.log(vowelCalculator("SAHILa"));

//grade calculator
const gradeCalculator = (grade) => {
  if ((grade <= 100) & (grade >= 85)) {
    return "Grade A";
  } else if ((grade <= 84) & (grade >= 65)) {
    return "Grade B";
  } else if ((grade <= 64) & (grade >= 45)) {
    return "Grade C";
  } else if ((grade <= 44) & (grade >= 31)) {
    return "Grade D";
  } else {
    return "You are failed";
  }
};
console.log(gradeCalculator(100));
