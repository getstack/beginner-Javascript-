//
const numbers = arrayFromRange  (1,20);
console.log (numbers);

 function arrayFromRange (min,max){
   
    const output = [];
    for (let i = min ; i <= max ; i++)
         
         output.push(i)
         return output ;


}

// Hositing called a variable or function before its declatattion 

//Varibale Hoisting

console.log (x);
var x = 3;


// // function Hoisting  

 (c);

function c (){
    console.log ('lets build');
}


// Block Scope 

let a = 20;

{

    var a = 10 ;
    const b = 12;
    var c = 'waseem'

    
    
 }

// Clousers 

function outer () {
            
        let a = 10;
        function inner () {
            console.log (a);

        }
    return inner ();  

}

outer();

