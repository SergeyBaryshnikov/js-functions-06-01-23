// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

/**
 *
 * @param {number} userInput
 * @returns {string}
 */
const isEvenOrOddWay1 = function (userInput) {
  const numberUserInput = Number(userInput);
  if (numberUserInput % 2 === 0) {
    return "even";
  }
  if (numberUserInput % 2 < 0 || numberUserInput % 2 > 0) {
    return "odd";
  }
  return String(numberUserInput);
};

console.log(isEvenOrOddWay1(prompt("Please enter a number:", 0)));

/**
 *
 * @param {number} userInput
 * @returns {string}
 */
const isEvenOrOddWay2 = function (userInput) {
  const numberUserInput = Number(userInput);
  if (String(numberUserInput) === "NaN") {
    return String(numberUserInput);
  }
  if (numberUserInput % 2 === 0) {
    return "even";
  }
  return "odd";
};

console.log(isEvenOrOddWay2(prompt("Please enter a number:", 0)));

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

/**
 *
 * @param {any} arg1
 * @param {any} arg2
 * @returns {any}
 */
const compareTypeWay1 = function (arg1, arg2) {
  if (typeof arg1 === typeof arg2) {
    if (arg1 > arg2) {
      return arg1;
    }
    if (arg1 < arg2) {
      return arg2;
    }
  }
  return null;
};

console.log(compareTypeWay1(0, 0));

/**
 *
 * @param {any} arg1
 * @param {any} arg2
 * @returns {any}
 */
const compareTypeWay2 = function (arg1, arg2) {
  if (typeof arg1 !== typeof arg2 || arg1 === arg2) {
    return null;
  }
  if (arg1 > arg2) {
    return arg1;
  }
  return arg2;
};

console.log(compareTypeWay2(0, 0));

/**
 *
 * @param {any} arg1
 * @param {any} arg2
 * @returns {any}
 */
const compareTypeWay1WithNaN = function (arg1, arg2) {
  if (typeof arg1 === typeof arg2) {
    if (arg1 > arg2) {
      return arg1;
    }
    if (arg1 < arg2) {
      return arg2;
    }
    if (arg1 !== arg2) {
      return NaN;
    }
  }
  return null;
};

console.log(compareTypeWay1WithNaN(0, 0));

/**
 *
 * @param {any} arg1
 * @param {any} arg2
 * @returns {any}
 */
const compareTypeWay2WithNaN = function (arg1, arg2) {
  if (typeof arg1 !== typeof arg2 || arg1 === arg2) {
    return null;
  }
  if (arg1 > arg2) {
    return arg1;
  }
  if (arg1 < arg2) {
    return arg2;
  }
  return NaN;
};

console.log(compareTypeWay2WithNaN(0, 0));

// const userInput = prompt("Enter number: ", "5.56");

// // if (userInput === "" || userInput === null || Number.isNaN(Number(userInput))) {
// //   console.log("error");
// // } else {
//   console.log(userInput, Number(userInput));
// // }

// const userInput1 = prompt();
// const userInput2 = prompt();

// if (checkNumber(userInput1) && checkNumber(userInput2)) {
//   console.log(getSumTwoNumbers(Number(userInput1), Number(userInput2)));
// } else {
//   console.log("error! value must be number");
// }
// /**
//  *get summ two number
//  * @param {number} num1
//  * @param {number} num2
//  * @returns {number}
//  */
// function getSumTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// /**
//  *
//  * @param {any} value
//  * @returns {boolean}
//  */
// function checkNumber(value) {
//   const checkValue =
//     value === "" || value === null || Number.isNaN(Number(value));
//   return !checkValue;
// }

// /**
//  *
//  * @param {any} a
//  * @param {any} b
//  * @returns {any | null}
//  */
// function maxValue(a = "3", b = 7) {
//   if (typeof a === typeof b) {
//     if (a >= b) {
//       return a;
//     }
//     return b;
//   }
//   return null;
// }

// console.log(maxValue(5, 3));

// /**
//  * check number is even
//  * @param {number} num
//  * @returns {boolean}
//  */
// function isEven(num) {
//   return !(num % 2);
// }
// console.log(isEven(7));

// /**
//  * check number is even
//  * @param {number} num
//  * @returns {boolean}
//  */
// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(4));

// const isEven = function (num) {
//   return num % 2 === 0;
// };
// console.log(isEven(4));

// /**
//  *
//  * @param {number} age > 0
//  * @param {number} FULL_AGE default value = 18
//  * @returns {boolean}
//  */
// function isAdult(age, FULL_AGE = 18) {
//   return age >= FULL_AGE;
// }

// console.log(isAdult(18));

// /**
//  *
//  * @param {any}
//  * @returns {any | null}
//  */
// const getUserInput = function () {
//   const input = prompt();
//   if (input) {
//     return input;
//   }
//   return null;
// };

// console.log(checkMultiplicity(3,6)

// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {boolean}
//  */
// const isMultiplicity = function (number1, number2) {
//   return number1 % number2 === 0;
// };

// const number1 = 10;
// const number2 = 2;

// if (Number.isInteger(number1) && Number.isInteger(number2)) {
//   console.log(isMultiplicity(number1, number2));
// }

// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @param {number} number3
//  * @returns {boolean}
//  */
// const isTriangle = function (number1, number2, number3) {
//   return (
//     number1 + number2 > number3 &&
//     number3 + number2 > number1 &&
//     number1 + number3 > number2 &&
//     number1 > 0 &&
//     number2 > 0 &&
//     number3 > 0
//   );
// };
// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */
// const compare = function (number1, number2) {
//   if (number1 === number2) {
//     return 0;
//   }
//   if (number1 > number2) {
//     return 1;
//   }
//   return -1;
// };

// console.log(compare(3, 6));

// /**
//  *
//  * @param {number} a
//  * @param {number} b
//  * @param {number} c
//  * @returns {number[] | null}
//  */
// const calculateEquation = function (a = 1, b = -26, c = 120) {
//   const D = b * b - 4 * a * c;
//   if (D < 0) {
//     return null;
//   }
//   if (D === 0) {
//     const x = -b / (2 * a);
//     return [x];
//   }
//   const x1 = (-b + Math.sqrt(D)) / (2 * a);
//   const x2 = (-b - Math.sqrt(D)) / (2 * a);
//   return [x1, x2];
// };

// const result = calculateEquation();
// if (result) {
//   console.log(result);
// } else {
//   console.log("roots not found");
// }
