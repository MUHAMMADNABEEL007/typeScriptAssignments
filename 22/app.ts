// More Conditional Tests: 
// You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

let smallCric='cricket';
let CapCric='Cricket';
console.log("smallCric===CapCric I predict false.")
console.log((smallCric===CapCric));

let two='Two'
let Stwo='2'
console.log("smallCric===CapCric I predict true.")
console.log((two!==Stwo));



// • Tests using the lower case function

let name1="JHON";
let lowerName1=name1.toLowerCase();

console.log("name1===lowerName1 I predict false.")
console.log((name1===lowerName1));

let name2="doe";
let lowerName2=name2.toLowerCase();

console.log("name2===lowerName2 I predict true.")
console.log((name2===lowerName2));


// • Numerical tests involving equality and inequality,
let num=23;
console.log("num===25 I predict false.")
console.log((num===25));

let num0=23;
console.log("num0!==25 I predict true.")
console.log((num0!==25));

// greater than and less than, 
let num1=23;
console.log("num1>25 I predict false.")
console.log((num1>25));

let num2=24;
console.log("num2<25 I predict true.")
console.log((num2<25));

// greater than or equal to, and less than or equal to
let num3=5;
console.log("num3>=4 I predict true.")
console.log((num3>=4));

let num4=5;
console.log("num4<=4 I predict false.")
console.log((num4<=4));


// • Tests using "and" and "or" operators
let a=50;
console.log("a>40 && a<50 I predict false.")
console.log((a>40 && a<50));

console.log("a>40 || a<50 I predict true.")
console.log((a>40 || a<50));


// • Test whether an item is in a array
let fruits=['mango','banana','pineapple'];
console.log("fruits.indexOf('pineapple')!==-1 I predict true.")
console.log(fruits.indexOf('pineapple')!==-1);


// • Test whether an item is not in a array
console.log("fruits.indexOf('apple')!==-1 I predict false.")
console.log(fruits.indexOf('eapple')!==-1);

