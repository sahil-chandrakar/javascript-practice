"use strict";
// celcius to feh
const getCel = document.querySelector("#getCel");
const showFara = document.querySelector("#fara");
const celToFeh = (cel) => {
    return cel * (9 / 5) + 32;
};
getCel.addEventListener("input", () => {
    const value = +getCel.value;
    showFara.innerHTML = celToFeh(value) + " Farenheit";
});
// sum of the numbers in an array and average of array
const sumArrDisplay = document.querySelector("#sumArrDisplay");
const sumArrInput = document.querySelector("#sumArrayInput");
const sumArraySubmit = document.querySelector("#sumArraySubmit");
const displayArrayAvg = document.querySelector("#displayArrayAvg");
let averageOfArray;
const sumOfN = (arr) => {
    let sum = 0;
    arr.forEach((val) => {
        sum += parseInt(val);
    });
    return sum;
};
sumArraySubmit.addEventListener("click", () => {
    const data = sumArrInput.value;
    const arr = data.split(",");
    sumArrDisplay.innerHTML = String(sumOfN(arr));
    averageOfArray = sumOfN(arr) / arr.length;
    displayArrayAvg.innerHTML = String(averageOfArray);
    sumArrInput.value = "";
});
//even number in an array
const evenArraySubmit = document.querySelector("#evenArraySubmit");
const showEvenArray = document.querySelector("#showEvenArray");
const inputArray = document.querySelector("#inputArray");
const evenNumber = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if (!isNaN(num) && num % 2 == 0) {
            result.push(num);
        }
    }
    return result;
};
evenArraySubmit.addEventListener("click", () => {
    const data = inputArray.value;
    const arr = data.split(",");
    showEvenArray.innerHTML = evenNumber(arr).join(", ");
    inputArray.value = "";
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
    inputString.value = "";
});
const checkVowelInput = document.querySelector("#checkVowelInput");
const submitVowel = document.querySelector("#submitVowel");
const checkVowelDisplay = document.querySelector("#checkVowelDisplay");
const vowelCalculator = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU";
    str.split("").forEach((val) => {
        if (vowels.includes(val))
            count++;
    });
    return count;
};
submitVowel.addEventListener("click", () => {
    checkVowelDisplay.innerHTML = String(vowelCalculator(checkVowelInput.value));
    checkVowelInput.value = "";
});
//grade calculator
const checkGradeInput = document.querySelector("#checkGradeInput");
const submitGrade = document.querySelector("#submitGrade");
const checkGradeOutput = document.querySelector("#checkGradeOutput");
const gradeCalculator = (grade) => {
    if (grade <= 100 && grade >= 85) {
        return "Grade A";
    }
    else if (grade <= 84 && grade >= 65) {
        return "Grade B";
    }
    else if (grade <= 64 && grade >= 45) {
        return "Grade C";
    }
    else if (grade <= 44 && grade >= 31) {
        return "Grade D";
    }
    else {
        return "You are failed";
    }
};
submitGrade.addEventListener("click", () => {
    const grade = Number(checkGradeInput.value);
    checkGradeOutput.innerHTML = gradeCalculator(grade);
    checkGradeInput.value = "";
});
