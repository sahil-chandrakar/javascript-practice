// celcius to feh
const getCel = document.querySelector("#getCel");
const showFara = document.querySelector("#fara");
const celToFeh = (cel) => {
  return cel * (9 / 5) + 32;
};
getCel.addEventListener("input", () => {
  showFara.innerHTML = celToFeh(getCel.value) + ' Farenheit';
});


// sum of the numbers in an array and average of array
const sumArrDisplay = document.querySelector("#sumArrDisplay");
const sumArrInput = document.querySelector("#sumArrayInput");
const sumArraySubmit = document.querySelector("#sumArraySubmit");
let averageOfArray;

const sumOfN = (arr) => {
  let sum = 0;
  arr.forEach((val) => {
    sum += parseInt(val);
  });
  return sum;
};

sumArraySubmit.addEventListener("click", () => {
  let data = "";
  data += sumArrInput.value;
  let arr = data.split(",");
  // console.log(sumOfN(arr))
  sumArrDisplay.innerHTML = sumOfN(arr);
  averageOfArray = sumOfN(arr) / arr.length;
  displayArrayAvg.innerHTML = averageOfArray;
  sumArrInput.value = ''
});



//even number in an array
const evenArraySubmit = document.querySelector("#evenArraySubmit");
const showEvenArray = document.querySelector("#showEvenArray");
const inputArray = document.querySelector("#inputArray");

const evenNumber = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
evenArraySubmit.addEventListener("click", () => {
  let data = "";
  data += inputArray.value;
  let arr = data.split(",");
  // console.log(sumOfN(arr))
  showEvenArray.innerHTML = evenNumber(arr);
  inputArray.value = ''
});

// string reversal
const inputString = document.querySelector("#inputString");
const displayRevString = document.querySelector("#displayRevString");
const revStringSubmit = document.querySelector("#revStringSubmit");

const stringReverse = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};
revStringSubmit.addEventListener("click", () => {
  displayRevString.innerHTML = stringReverse(inputString.value);
  inputString.value = ''
});

//vowel counter - a e i o u
const checkVowelInput = document.querySelector("#checkVowelInput");
const submitVowel = document.querySelector("#submitVowel");
const checkVowelDisplay = document.querySelector("#checkVowelDisplay");

submitVowel.addEventListener("click", () => {
  checkVowelDisplay.innerHTML = vowelCalculator(checkVowelInput.value);
  checkVowelInput.value = ''
});

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

//grade calculator
const checkGradeInput = document.querySelector("#checkGradeInput");
const submitGrade = document.querySelector("#submitGrade");
const checkGradeOutput = document.querySelector("#checkGradeOutput");

submitGrade.addEventListener("click", () => {
  console.log(gradeCalculator(checkGradeInput.value));
  checkGradeOutput.innerHTML = gradeCalculator(checkGradeInput.value);
  checkGradeInput.value = ''
});

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
// console.log(gradeCalculator(100));
