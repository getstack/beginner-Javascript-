// Arithmetic operators 

let x1 = 10;
let y1 = 20 ;

//increment
//console.log(x++);

// Decrement
//console.log (--x);

// Assignment Operators 

let x = 10 ;
x = x + 4 ;
x += 5 ;
console.log (x)

// Realtional Operators 

let y = 1 ;

//console.log (y > 0);
//console.log (y >= 1);
//console.log (y < 1);

// Strict Equality  types and value 

console.log (y === 1); // true 
console.log (y !== 1); // false
console.log ('1' === 1);

// Lose Equality Operators 

console.log ('1' == 1);
console.log (true == 1 )

// ternary operators 

let points = 110;
let type = points > 100 ? 'Silver' : 'Gold';

let marks = 90 ;

let grade = marks > 100  ? 'A': 'B';

console.log (grade)

// Logocal operators 

let highIncom  = false ;
let goodCreditScore = false ;
//let eligibleForLoan = highIncom && goodCreditScore ;
let eligibleForLoan = highIncom || goodCreditScore ;// Both are true

console.log ("eligible", eligibleForLoan)

let applicationRefused = !eligibleForLoan ;

console.log (eligibleForLoan) ;


// if the 

let userColor ;
let defaultColor = "blue" ;
let currentColor = userColor || defaultColor ;

if (userColor == undefined ){
console.log (currentColor);

}







