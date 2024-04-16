// написать функцию, которая принмиает на вход два массива целых чисел, вернуть наибольшее число из двух массивов
/*const arr1 = [1, 2, 3, 4];
const arr2 = [10, 12, 5];
const maxNumber = (arr1, arr2) => {
  const arr12 = [...arr1, ...arr2];
  const max = Math.max(...arr12);
  return max;
};*/

const arr1 = [1, 2, 3, 4];
const arr2 = [10, 12, 5];
const maxNumber = (arr1, arr2) => {
  const arr12 = [...arr1, ...arr2];
  let max = 0; // объявление
  for (let a = 0; a <= arr12.length; a++) {
    if (arr12[a] > arr12[a + 1]) {
      max = arr12[a];
    } else {
      max = arr12[a + 1];
    }
  }
  return max;
};
console.log(maxNumber());

//алгоритм
//a = 0;
//начать
//сравнить а-тый элемент с a++ элементом;
//сохранить максимальный из них;
//конец
//повторять итерации до конца массива

// 1) Написать функцию, которая принимает массив целых чисел и возвращает только те числа, которые больше 18 в новом массиве. использовать цикл for
const moreThan18Numbers = (array, value) => {
  const newArray = [];
  for (let i = 0; array.length > i; i++) {
    if (array[i] > value) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return newArray;
};
moreThan18Numbers([1, 8, 18, 22, 56, 4], 18);

// 2)  написать функцию, которая принимает массив строк и возвращает самое длинное слово. Использовать массив while
const findLongestWord = (str) => {
  let strSplit = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
};
findLongestWord("москва париж нью-йорк");
