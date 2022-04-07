// Clousers In Javascript

var b = 12;

function outer(c) {

    let a = 10;
    function inner() {
        console.log(a, c, b);

    }
    return inner();

}

var myValue = outer(13);
console.log(myValue);


// Second Example 

// function outerFun (a) {
//      let b = 20;
//     function inner (){

//        let sum = a + b ;
//        console.log(`The sum of two numbers ${sum}`)
// }

// return inner() ;

// }

// outerFun (12);


var a = 20;
console.log(a);

// Arrow functions 
var c = (a, b) => a * b;

console.log(c(20, 3))


function add(a, b) {

    return a * b;


}
console.log(add(20, 90));


// Template  Literals 

// let h = `I am very succesful ` + a ;
// console.log (h)

// let find = [1,2,3,4,5,12,8,70];

// find.pop (1,3)

// console.log (find);

//promises 

let complete = true;

let prom = promise(function (resolve, reject) {

        if (complete ) {

        resolve("Yes waseem")

    } else {

      reject ("This person is not waseem");

    }

})


console.log (prom);

console.log ("Works");