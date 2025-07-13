// start 1

// Check if a number is even or odd.

let num = 20;

if(num % 2 == 0){
    console.log("even");
}else{
    console.log("odd");
}

// start 2 
// check if a number is positive, negative, or zero.

let num2 = -50;

if(num2 > 0){
    console.log("positive");
}else if(num2 < 0){
    console.log("negative");
}else{
    console.log("zero");
}

// start 3
// check if a person is eligible to vote (age ≥ 18).

let age = 18;

if(age >= 18){
    console.log("eligible to vote");
}else{
    console.log("not eligible to vote");
}   

// start 4
// compare two numbers and return the larger one.

let num3 = 10;
let num4 = 20;  

if(num3 > num4){
    console.log(`${num3} is larger than ${num4}`);
}else{
    console.log(`${num4} is larger than ${num3}`);
}   

// start 5
// check if a number is divisible by 5 and 11.

let num5 = 55;

if(num5 % 5 == 0 && num5 % 11 == 0){
    console.log("divisible by 5 and 11");
}else{
    console.log("not divisible by 5 and 11");
    }

// start 6
// check if a character is a vowel or consonant.

let char = "a"; 

if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
    console.log("vowel");
}else{
    console.log("consonant");
}   

// start 7
// find the grade based on percentage: A, B, C, etc.

let percentage = 85;    

if(percentage >= 90){
    console.log("A");
}else if(percentage >= 80){
    console.log("B");
}else if(percentage >= 70){
    console.log("C");
}else{
    console.log("D");
}   

// start 8
// check if a year is a leap year.

let year = 2024;

if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log("leap year");
}else{
    console.log("not a leap year");
}

// start 9
// check whether a character is alphabet, digit, or special character.

let char2 = "18";

if(char2 >= "a" && char2 <= "z" || char2 >= "A" && char2 <= "Z"){
    console.log("alphabet");
}else if(char2 >= "0" && char2 <= "9"){
    console.log("digit");
}else{
    console.log("special character");
}

// start 10
// check if three sides can form a triangle.

let side1 = 3;
let side2 = 4;
let side3 = 5;

if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
    console.log("can form a triangle");
}else{
    console.log("cannot form a triangle");
}

// start 11
// find the largest among three numbers.

let num6 = 10;
let num7 = 20;
let num8 = 30;  

if(num6 > num7 && num6 > num8){
    console.log(`${num6} is largest`);
}else if(num7 > num6 && num7 > num8){
    console.log(`${num7} is largest`);
}else{
    console.log(`${num8} is largest`);
}

// start 12
// use a switch statement to print day of the week based on number (1–7).

let day = 10;    

switch(day){
    case 1:
        console.log("Monday");
        break;  
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;  
    default:
        console.log("invalid day");
}   

// start 13
// use ternary operator to find minimum of two numbers.

let num9 = 10;
let num10 = 20;

let min = num9 < num10 ? num9 : num10;
console.log(`${min} is smaller`);

// start 14
// use nested if statements to find the category of a student based on marks.

let marks = 85;

if(marks >= 90){
    console.log("A");
}else if(marks >= 80){
    console.log("B");
}else if(marks >= 70){
    console.log("C");
}else if(marks >= 60){
    console.log("D");
}else{
    console.log("F");
}   

// start 15
// write a program to check if a number is in range (10 to 100).

let num11 = 10;             

if(num11 >= 10 && num11 <= 100){
    console.log("in range");
}else{
    console.log("not in range");
}

// start 16
// check if a string is empty or not.

let str = "";

if(str.length == 0){
    console.log("empty");
}else{
    console.log("not empty");
}

// start 17
// check if a number is prime using if and for loop.

let num12 = 11;

for(let i = 2; i < num12; i++){
    if(num12 % i == 0){
        console.log("not prime");
        break;
    }else{
        console.log("prime");
        break;
    }
}

// start 18
// check if the given number is a perfect square.

let num13 = 16;

if(Math.sqrt(num13) % 1 == 0){
    console.log("perfect square");
}else{
    console.log("not a perfect square");
}

// start 19
// check if a character is uppercase or lowercase.

let char3 = "A";

if(char3 == char3.toUpperCase()){
    console.log("uppercase");
}else{
    console.log("lowercase");
}

// start 20
// use switch to build a basic calculator (add, subtract, multiply, divide).

let num14 = 10;
let num15 = 20; 
let operator = "*";

switch(operator){
    case "+":
        console.log(num14 + num15);
        break;
    case "-":
        console.log(num14 - num15);
        break;
    case "*":
        console.log(num14 * num15);
        break;
    case "/":   
        console.log(num14 / num15);
        break;
    default:
        console.log("invalid operator");
}

// start 21
// check if a number is positive, negative, or zero using switch.

let num16 = 10; 

switch(true){
    case num16 > 0:
        console.log("positive");
        break;
    case num16 < 0:
        console.log("negative");
        break;
    default:
        console.log("zero");
}

