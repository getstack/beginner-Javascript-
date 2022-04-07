//
const numbers = arrayFromRange  (1,20);
console.log (numbers);

 function arrayFromRange (min,max){
   
    const output = [];
    for (let i = min ; i <= max ; i++)
         
         output.push(i)
         return output ;


}

// // Hositing called a variable or function before its declatattion 

//Varibale Hoisting

console.log (x);
var x = 3;


// function Hoisting  

//  (c);

// function c (){
//     console.log ('lets build');
// }


// Block Scope 

// let a = 20;

// {

//     var a = 10 ;
//     const b = 12;
//     var c = 'waseem'

    
    
//  }


 let count = [];

 const countNums = [-100,-200,-300,400,566,6656,755,8666];
 
 for (let i = 0; i < countNums.length ; i++) {
 
            if (countNums[i] < 0 ) {
             
             count.push(countNums[i]);
         
            } 
 }
  console.log (count);
 
 
 // Count the negtive numbers in an array 
 
//  let count = [];
 
//  const countNums = [-100,-200,-300,400,566,6656,755,8666];
//  let i = 0;
//  while (i < countNums.length) {
 
//       if (countNums[i] < 0){
         
//          count.push (countNums[i]);
//      }
//         i++;  
 
 
 
//  }
//   console.log (count);
 



