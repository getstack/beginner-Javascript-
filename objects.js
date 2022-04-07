
// const circle = {

//     radius : 1 ,
//     location : {
//     x :1,
//     y:2,
//     },
//     draw : function () {
      
//         console.log ('Draw a circle'); 
//     }

// }

// console.log (circle.location);

// factory fucntions 

function createaCircle (radius){
  return {
 radius,
    draw (){

        console.log ('Draw a circle');
    }
};
}

const circle1 = createaCircle (1);
console.log (circle1);

//constructor functions 
 
function Circle (radius){

this.radius = radius;
this.draw = function (){

console.log ("draw");
}

}

//Dynamic natire of objects 
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,

    fullName: function (){

        return this.firstName + " " + this.lastName;
}
   
  };

// Calling a objects
  console.log (person.firstName);
  
//Primitives are copied by their value 
// let x = 10 ;
// let y = x;

// console.log (y);


// Objects are copied by Reference 

// let x = { value : 20};
// let y = x ;

//console.log (y.value);

// Enumeration 

const circle = {

    radius : 1,
    draw : function (){

        console.log ('draw');


    }

}

for ( let key in circle){

     console.log (key , circle[key]);
}



