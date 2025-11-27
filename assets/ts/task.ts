// celcius to feh
const getCel = document.querySelector("#getCel") as HTMLInputElement;
const showFara = document.querySelector("#fara") as HTMLElement;

const celToFeh = (cel: number): number => {
  return cel * (9 / 5) + 32;
};

getCel.addEventListener("input", () => {
  const value = +getCel.value;
  showFara.innerHTML = celToFeh(value) + " Farenheit";
});

// sum of the numbers in an array and average of array
const sumArrDisplay = document.querySelector("#sumArrDisplay") as HTMLElement;
const sumArrInput = document.querySelector(
  "#sumArrayInput"
) as HTMLInputElement;
const sumArraySubmit = document.querySelector(
  "#sumArraySubmit"
) as HTMLButtonElement;
const displayArrayAvg = document.querySelector(
  "#displayArrayAvg"
) as HTMLElement;

let averageOfArray: number;

const sumOfN = (arr: string[]) => {
  let sum = 0;
  arr.forEach((val) => {
    sum += parseInt(val);
  });
  return sum;
};

sumArraySubmit.addEventListener("click", () => {
  const data: string = sumArrInput.value;
  const arr: string[] = data.split(",");

  sumArrDisplay.innerHTML = String(sumOfN(arr));
  averageOfArray = sumOfN(arr) / arr.length;
  displayArrayAvg.innerHTML = String(averageOfArray);
  sumArrInput.value = "";
});

//even number in an array
const evenArraySubmit = document.querySelector(
  "#evenArraySubmit"
) as HTMLButtonElement;
const showEvenArray = document.querySelector("#showEvenArray") as HTMLElement;
const inputArray = document.querySelector("#inputArray") as HTMLInputElement;

const evenNumber = (arr: string[]): number[] => {
  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    if (!isNaN(num) && num % 2 == 0) {
      result.push(num);
    }
  }
  return result;
};

evenArraySubmit.addEventListener("click", () => {
  const data: string = inputArray.value;
  const arr: string[] = data.split(",");
  showEvenArray.innerHTML = evenNumber(arr).join(", ");
  inputArray.value = "";
});

// string reversal
const inputString = document.querySelector("#inputString") as HTMLInputElement;
const displayRevString = document.querySelector(
  "#displayRevString"
) as HTMLElement;
const revStringSubmit = document.querySelector(
  "#revStringSubmit"
) as HTMLButtonElement;

const stringReverse = (str: string): string => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};

revStringSubmit.addEventListener("click", () => {
  displayRevString.innerHTML = stringReverse(inputString.value);
  inputString.value = "";
});

const checkVowelInput = document.querySelector(
  "#checkVowelInput"
) as HTMLInputElement;
const submitVowel = document.querySelector("#submitVowel") as HTMLButtonElement;
const checkVowelDisplay = document.querySelector(
  "#checkVowelDisplay"
) as HTMLElement;

const vowelCalculator = (str: string): number => {
  let count = 0;
  const vowels = "aeiouAEIOU";

  str.split("").forEach((val) => {
    if (vowels.includes(val)) count++;
  });

  return count;
};

submitVowel.addEventListener("click", () => {
  checkVowelDisplay.innerHTML = String(vowelCalculator(checkVowelInput.value));
  checkVowelInput.value = "";
});

//grade calculator
const checkGradeInput = document.querySelector(
  "#checkGradeInput"
) as HTMLInputElement;
const submitGrade = document.querySelector("#submitGrade") as HTMLButtonElement;
const checkGradeOutput = document.querySelector(
  "#checkGradeOutput"
) as HTMLElement;

const gradeCalculator = (grade: number): string => {
  if (grade <= 100 && grade >= 85) {
    return "Grade A";
  } else if (grade <= 84 && grade >= 65) {
    return "Grade B";
  } else if (grade <= 64 && grade >= 45) {
    return "Grade C";
  } else if (grade <= 44 && grade >= 31) {
    return "Grade D";
  } else {
    return "You are failed";
  }
};

submitGrade.addEventListener("click", () => {
  const grade = Number(checkGradeInput.value);
  checkGradeOutput.innerHTML = gradeCalculator(grade);
  checkGradeInput.value = "";
});
