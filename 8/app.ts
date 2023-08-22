// Adding Comments: Choose two of the programs you’ve written, 
// and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.

// Program one

// store variable and its value

var favNumber=1;

// Print the message about favorite number by using value of variable named as favNumber
console.log(`Hi! your favorite number is ${favNumber}`);

// Result: This program print hard coded favorite number with a revealing message! 

// Program two

// Store a person’s name in a variable

var person: string=`MUHAMMAD NABEEL`;

// Print value of person variable in lower case
console.log(person.toLowerCase());
// Print value of person variable in upper case
console.log(person.toUpperCase());
// Print value of person variable in title case by calling the titleCase() function
console.log(titleCase(person));

// titleCase() function used to convert string into title case
function titleCase(e){
    
    e=e.toLowerCase();
    e=e.split(' ');
    
    for (var i=0; i<e.length; i++){
        e[i]=e[i].charAt(0).toUpperCase()+e[i].slice(1);
    }
    
    return e.join(' ');
}

// This program used to print string in upper case, lower case and title case!