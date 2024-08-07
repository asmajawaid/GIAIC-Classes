"use strict";
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 5));
let sumAdd = (num1, num2) => {
    return num1 + num2;
};
let ans = sum(8, 8);
console.log(ans);
// console.log(sum(8,8));
function Sum(num1, num2) {
    return num1 - num2;
}
console.log(Sum(20, 5));
//write a function checkEvenOdd that accepts a number and prints 
// whether it is even or odd?
function checkEvenOdd(numEvenOdd) {
    if (numEvenOdd % 2 === 0) {
        console.log(`Its Even: ${numEvenOdd}`);
    }
    else {
        console.log(`Its Odd: ${numEvenOdd}`);
    }
}
checkEvenOdd(9);
checkEvenOdd(6);
// write a function arrayOperations that creats an array of numbers 
// [4,8,6,12,28], adds a number to the end of the array, removes the first number and removes the middle number i.e 6 
let arrayOperations = () => {
    let arr = [4, 8, 6, 12, 28]; // 8 12 28 36
    arr.push(36);
    arr.shift();
    arr.splice(1, 1);
    console.log(arr);
};
arrayOperations();
//  write a function multiplies the element of an array by 2 and returns the 
// modified array.
//[2,4,8,5]
// [4,8,16,10]
function multiplies(arr0) {
    for (let index = 0; index < arr0.length; index++) {
        arr0[index] *= 2;
    }
    return arr0;
}
let myArray = [2, 4, 8, 5];
console.log(multiplies(myArray));
function abc() {
    map.map((value) => {
        return value * 2;
    });
}
let map = [2, 4, 6, 8, 5];
console.log(abc());
console.log("map");
//write a function that accepts an array of numbers and returns the largest number.
function largestNumber(...arrA) {
    let largest = arrA[0];
    for (let index = 0; index < arrA.length; index++) {
        if (arrA[index] > largest) {
            largest = arrA[index];
        }
    }
    console.log(largest);
}
largestNumber(2, 4, 5, 6, 10);
// Problem: Write a function that takes an array of numbers and returns the sum of all 
// positive numbers in the array.
function positive(numbers) {
    let sum = 0;
    for (let num of numbers) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(positive([-4, +5, -8, +2, -1]));
// Problem: Write a function that takes a string and returns the reversed version of 
// the string.
function reverseString(str) {
    return str.split("").reverse().join("");
}
// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
// Problem: Write a function that takes an array of strings and returns a new array 
// with only the strings that have a length greater than 5 characters.
function filterStringsByLength(strings) {
    return strings.filter(str => str.length > 5);
}
// Example usage:
console.log(filterStringsByLength(["apple", "banana", "grapefruit", "orange"]));
// Output: ["banana", "grapefruit", "orange"]
