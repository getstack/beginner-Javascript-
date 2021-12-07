//

const  colors = ['green','red','blue','pink'];

// End of 
colors.push ('brown','green');

// begining 
colors.unshift (1,2);

// End of 
colors.splice (1,0,'a','b');

// Find the primitives values  in javacscript 

const numbers = [1,2,3,4];


console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(4));

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

// Arrows Function 

