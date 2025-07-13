// write a function to add two numbers

function sum(x, y){
    sum = x + y;
    return sum;
}
console.log(sum(3, 5));

// Create a function to reverse a string.

function reverse(str){
    
    return str.split('').reverse().join('');
}
console.log(reverse("Shruti"));

function reverseString(str){
    let reversed = '';
    for(let i=str.length -1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello Shruti"));

// Write a function that returns the factorial of a number.

function factorial(n){
    let fact = 1;
    for(i = 2; i <= n; i++){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));

// create a function to check if string is palindrom or not

function palindrom(str){
    let str1 = str.split('').reverse('').join('');

    if(str1 == str){
        console.log(`${str} the string is palindrom`);
    } else {
        console.log(`${str} this is not a palindrom string`);
    }
}
console.log(palindrom("Shruti"));

// write a function to find the maximum number in an array.

function Max(arr){
    return Math.max(...arr);
}
console.log(Max([5,2,6,8,4,2,9,10]));

// Write a function to flatten a nested array.

function flattenArray(arr){
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, 4], 5], 6]));

//Create a function to remove duplicates from an array.

function duplicate(n){
   return[...new Set(n)];
}

console.log(duplicate([1,4,5,8,6,2,7,5,3,5,2]));

// Write a function that accepts any number of arguments and returns their sum.

function sums(...numm){
    return numm.reduce((total,num) => total + num, 0);
    // reduce() iterates through the array and adds up all numbers.
}
console.log(sums(5,6,8,5,6));

// Write a higher-order function that accepts a function and a value.
// Write a higher-order function that accepts a function and a value, and applies the function to the value.

function applyFunction(fn, value){
    return fn(value);
}

function square(num) {
    return num*num;
}

console.log(applyFunction(square, 5));

function returnSquare(num){
    return num * num;
}
console.log(returnSquare(6));

// Write a function to check if a number is prime.
function isPrime(num) {
    if (num <=1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false  

// Write a function to find the longest word in a sentence.
function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"

// Write a function to count the occurrences of each character in a string.
function countOccurrences(str) {
    const occurrences = {};
    
    for (let char of str) {
        occurrences[char] = (occurrences[char] || 0) + 1;
    }
    
    return occurrences;
}
console.log(countOccurrences("hello world")); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// Write a function to find the intersection of two arrays.
function intersection(arr1, arr2) { 
    return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// Write a function to convert a string to title case.

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(toTitleCase("hello world")); // "Hello World"



