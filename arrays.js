//

const  colors = ['green','red','blue','pink'];

// End of 
colors.push ('brown','green');

// begining 
colors.unshift (1,2);

// End of 
colors.splice (1,0,'a','b');

// Delete the last element of array
colors.pop ('pink');

// Find the primitives values  in javacscript 

// const numbers = [1,2,3,4];


// console.log(numbers.indexOf(3));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.includes(4));

// find the values of Reference type 
const courses = [
    {id:1 , name : 'a'},
    {id:2 , name : 'b'}

]

const course = courses.find(function(course){
   
    return course.name == 'a';

});

//console.log (course);


// Find the index of referencs type 

const subjects = [
   {id :1 , name:'x'},
   {id :2 , name:'y'}
 ]

const subject = subjects.find( subject => subject.name == 'x');


//console.log (subject);

// Removing Elements 

let removeElements = [1,2,3,4,5,6];

removeElements.splice (0,6); // Remove the elements from array ( index,delete the element)


//Solution 1 to empty an array
removeElements.length = 0;

// Solution 2  assign to new empty array the existing array


removeElements = []; 
console.log(removeElements);


// Combinig Arrays 

const first = [1,2,3,4]
const second = [5,6,7,8,9]

const combined = first.concat (second);

console.log (combined);




const one = [ {id :1} , {id :2}  ,{id :3}  ,{id :4}  ,{id :5} ];

one[0].id = 3;
console.log (one);

const question= [1,2,3,4];

question.push (33,22,'a','c');
question.unshift (33,55,2);
console.log(question);

//Combining Arrays 
const v1 = [1,2,3,4];
const v2 = [3,4,5,6,7,8];

//const combine = v1.concat(v2);

// Now we are using Spread operator 

const combine = [...v1 , ...v2]

console.log (combine);


// const obj1 = {

// id : 1,
// Name : 'adam',
// age : 20,

// }

// const obj2 = {

//     id : 3,
//     Name : 'Martin',
//     age : 30,
    
//     }
    
// iterate the array 

const numbers = [1,2,3];

const joined = numbers.join ('-');

//console.log (joined);



// for (let number of numbers){

//     console.log (number)

// }

// numbers.forEach((number,index) => console.log (index,number));


// Spread operators 

const state = {

    name : 'jhon' ,

}

const newstate = {

...state,
id:3,

}

//console.log (newstate);

// joing Arrays 

const firsts = [1,2,3,4,5,6,7]

const seconds = [5,6,7];

const add = [...first , ...second];

//console.log (add);

// Testing ana array 

const testing = [1,-2,3];


const atLeastOnePositiveNumer =testing.some (function (value){

    return value >= 0 ;
    
    
    });
console.log (atLeastOnePositiveNumer);

// Filterring an array 
const filterNumber = [1,2,3,-4,-5,-6,9,10,11]

const filtered = filterNumber.filter (value => value >= 0);

console.log (filtered);



// Mapping method 

const maped = [2,3,4,5,6]
const newArray = maped.map(calculate);


function calculate (num){

return num * 2 ;
}

console.log (newArray);





