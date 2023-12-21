// Array1.

// function getLevel2(n) {
//     let resultArray = [];

//     for (let i = 1; i <= n; i++) {
//         resultArray.push(Math.pow(2, i));
//     }

//     return resultArray;
// }

// let result = getLevel2(5);
// console.log(result); 


// Array2.

// function generateArray(n, A, B) {
//     let resultArray = [A, B];

//     for (let i = 2; i < n; i++) {
//         resultArray[i] = resultArray[i - 1] + resultArray[i - 2];
//     }

//     return resultArray;
// }

// let result = generateArray(5, 2, 3);
// console.log(result); 


// Array3.

// function reverseArray(arr) {
//     let reversedArray = arr.slice().reverse();
//     return reversedArray;
// }

// let inputArray = [1, 2, 3, 4, 5];
// let result = reverseArray(inputArray);
// console.log(result);


// Array4.

// function findOdds(arr) {
//     let oddIndices = [];
//     let oddCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddIndices.push(i);
//             oddCount++;
//         }
//     }

//     console.log("Massiv elementlari: " + arr.join(" "));
//     console.log("Natija: " + oddIndices.map(index => arr[index]).join(" ") + " toqlar soni = " + oddCount);
// }

// let inputArray = [4, 5, 7, 8, 6, 9];
// findOdds(inputArray);


// Array5.

// function printEvenOddReordered(arr) {
//     let evenIndices = [];
//     let oddIndices = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenIndices.push(i);
//         } else {
//             oddIndices.push(i);
//         }
//     }

//     console.log("Juftlar: " + evenIndices.map(index => arr[index]).join(" "));

//     console.log("Toqlar: " + oddIndices.reverse().map(index => arr[index]).join(" "));
// }

// let inputArray = [4, 5, 7, 8, 6, 9];
// printEvenOddReordered(inputArray);


// Array6.

// function printEvenIndexedElements(arr) {
//     let result = "";

//     for (let i = 0; i < arr.length; i += 2) {
//         result += arr[i] + " ";
//     }

//     console.log(result.trim());
// }

// let inputArray = [4, 5, 7, 8, 6, 9];
// printEvenIndexedElements(inputArray);


// Array7.

// function printOddIndexedElements(arr) {
//     let result = "";

//     for (let i = arr.length - 1; i >= 1; i -= 2) {
//         result += arr[i] + " ";
//     }

//     console.log(result.trim());
// }

// let inputArray = [4, 5, 7, 8, 6, 9];
// printOddIndexedElements(inputArray);


// Array8.

// function printEvenOddIndexedElements(arr) {
//     let evenResult = "";
//     let oddResult = "";

//     for (let i = 0; i < arr.length; i += 2) {
//         evenResult += arr[i] + " ";
//     }

//     for (let j = 1; j < arr.length; j += 2) {
//         oddResult += arr[j] + " ";
//     }

//     console.log(evenResult.trim() + " " + oddResult.trim());
// }

// let inputArray = [4, 5, 7, 8, 6, 9];
// printEvenOddIndexedElements(inputArray);


// Array9.

// function printOddEvenIndexedElements(arr) {
//     let oddResult = "";
//     let evenResult = "";

//     // Toq indekslilarni o'shish tartibida chiqarish
//     for (let i = 1; i < arr.length; i += 2) {
//         oddResult += arr[i] + " ";
//     }

//     // Juft indekslilarni kamayish tartibida chiqarish
//     for (let j = arr.length - 2; j >= 0; j -= 2) {
//         evenResult += arr[j] + " ";
//     }

//     console.log(oddResult.trim() + " " + evenResult.trim());
// }

// let inputArray = [4, 5, 7, 8, 6, 9];
// printOddEvenIndexedElements(inputArray);


// Array10.

// function printCustomOrder(arr) {
//     let result = "";

//     for (let i = 0; i < arr.length / 2; i++) {
//         result += arr[i] + " " + arr[arr.length - 1 - i] + " ";
//     }

//     if (arr.length % 2 !== 0) {
//         result += arr[Math.floor(arr.length / 2)];
//     }

//     console.log(result.trim());
// }

// let inputArray = [1, 2, 3, 4, 5, 6];
// printCustomOrder(inputArray);


// Array11.

// function rangeOutSum(arr, K, L) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (i < K || i > L) {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let K = 2;
// let L = 5;
// let result = rangeOutSum(inputArray, K, L);
// console.log(result);


// Array12.


// Array13.

// function getOddMin(arr) {
//     let oddMin = Infinity;

//     for (let i = 0; i < arr.length; i += 2) {
//         if (arr[i] < oddMin) {
//             oddMin = arr[i];
//         }
//     }

//     return oddMin === Infinity ? "Juft indeksli element mavjud emas" : oddMin;
// }

// let inputArray = [5, 2, 8, 1, 9, 4, 7];
// let result = getOddMin(inputArray);
// console.log(result);


// Array14.

// function getEvenMax(arr) {
//     let evenMax = -Infinity;

//     for (let i = 1; i < arr.length; i += 2) {
//         if (arr[i] > evenMax) {
//             evenMax = arr[i];
//         }
//     }

//     return evenMax === -Infinity ? "Toq indeksli element mavjud emas" : evenMax;
// }

// let inputArray = [5, 2, 8, 1, 9, 4, 7];
// let result = getEvenMax(inputArray);
// console.log(result);


// Array15.

// function getLastLocalMaxIndex(arr) {
//     let lastLocalMaxIndex = -1;

//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//             lastLocalMaxIndex = i;
//         }
//     }

//     return lastLocalMaxIndex;
// }

// let inputArray = [3, 7, 1, 5, 4, 8, 6];
// let result = getLastLocalMaxIndex(inputArray);
// console.log(result);


// Array16.

// function findClosestToR(arr, R) {
//     let closestNumber = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (Math.abs(arr[i] - R) < Math.abs(closestNumber - R)) {
//             closestNumber = arr[i];
//         }
//     }

//     return closestNumber;
// }

// let inputArray = [3, 7, 1, 5, 4, 8, 6];
// let R = 9;
// let result = findClosestToR(inputArray, R);
// console.log(result);


// Array17.

// function findLargestSumPair(arr) {
//     if (arr.length < 2) {
//         return "Massivda yetarli elementlar mavjud emas";
//     }

//     let firstMax = Math.max(arr[0], arr[1]);
//     let secondMax = Math.min(arr[0], arr[1]);

//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] > firstMax) {
//             secondMax = firstMax;
//             firstMax = arr[i];
//         } else if (arr[i] > secondMax) {
//             secondMax = arr[i];
//         }
//     }

//     return [firstMax, secondMax];
// }

// let inputArray = [3, 7, 1, 5, 4, 8, 6];
// let result = findLargestSumPair(inputArray);
// console.log(result);


// Array18.

// function findDuplicateIndices(arr) {
//     let duplicateIndices = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 duplicateIndices.push(i, j);
//             }
//         }
//     }

//     return duplicateIndices;
// }

// let inputArray = [3, 7, 1, 5, 4, 8, 6, 7, 4];
// let result = findDuplicateIndices(inputArray);
// console.log(result);


// Array19.


// Array20.

// function getEvenElements(arr) {
//     let evenArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenArray.push(arr[i]);
//         }
//     }

//     return evenArray;
// }

// let inputArray = [3, 7, 1, 5, 4, 8, 6, 7, 4];
// let result = getEvenElements(inputArray);
// console.log(result);


// Array21.

// function incrementArrayElements(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] += k;
//     }

//     return arr;
// }

// let inputArray = [3, 7, 1, 5, 4, 8, 6, 7, 4];
// let k = 2;
// let result = incrementArrayElements(inputArray, k);
// console.log(result);


// Array22.

// function swapArrayHalves(arr) {
//     let halfLength = arr.length / 2;

//     for (let i = 0; i < halfLength; i++) {
//         let temp = arr[i];
//         arr[i] = arr[i + halfLength];
//         arr[i + halfLength] = temp;
//     }

//     return arr;
// }

// let inputArray = [3, 7, 1, 5, 4, 8];
// let result = swapArrayHalves(inputArray);
// console.log(result);


// Array23.

// function reverseArray(arr) {
//     let reversedArray = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     }

//     return reversedArray;
// }

// let inputArray = [3, 7, 1, 5, 4, 8];
// let result = reverseArray(inputArray);
// console.log(result);


// Array24.


// Array25.

// function rotateLeft(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }

//     let lastElement = arr.pop();
//     arr.unshift(lastElement);

//     return arr;
// }
// let inputArray = [1, 2, 3, 4, 5];
// let result = rotateLeft(inputArray);
// console.log(result);


// Array26.

// function deleteElementWithIndex(arr, k) {
//     if (k >= 0 && k < arr.length) {
//         arr.splice(k, 1);
//     }
//     return arr;
// }

// let inputArray = [1, 2, 3, 4, 5];
// let kIndex = 2;
// let result = deleteElementWithIndex(inputArray, kIndex);
// console.log(result);


// Array27.

// function deleteElementsBetweenIndexes(arr, k, m) {
//     if (k >= 0 && m >= 0 && k < m && m < arr.length) {
//         arr.splice(k, m - k + 1);
//     }
//     return arr;
// }

// let inputArray = [1, 2, 3, 4, 5, 6, 7];
// let kIndex = 2;
// let mIndex = 4;
// let result = deleteElementsBetweenIndexes(inputArray, kIndex, mIndex);
// console.log(result);


// Array28.

// function deleteOneDuplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 arr.splice(j, 1);
//                 return arr;
//             }
//         }
//     }
//     return arr;
// }

// let inputArray = [1, 2, 3, 2, 4, 5, 4, 6];
// let result = deleteOneDuplicate(inputArray);
// console.log(result);


// Array29.

// function getElementsOneTime(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let currentElement = arr[i];
//         if (arr.indexOf(currentElement) === arr.lastIndexOf(currentElement)) {
//             result.push(currentElement);
//         }
//     }
//     return result;
// }

// let inputArray = [1, 5, 6, 1, 5, 7, 2];
// let result = getElementsOneTime(inputArray);
// console.log(result);


// Array30.

// function searchAllElements(arr, k) {
//     let result = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// let inputArray = [1, 5, 6, 1, 5, 7, 2];
// let searchValue = 5;
// let result = searchAllElements(inputArray, searchValue);
// console.log(result);
