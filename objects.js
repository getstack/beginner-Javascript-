

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

// constructor functions 
 
// function Circle (radius){
  
//     this.radius = radius ;
//     this.draw = function (){

//         console.log ("draw");

//     }


// }

// const circle = new Circle(1);
// console.log (circle);

//Dynamic natire of objects 

const circle = {
    
radius :1

};


circle.color = "yellow";
circle.radius = 3;


// Delete the property 

delete circle.color;

console.log (circle);