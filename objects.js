

const circle = {

    radius : 1 ,
    location : {
    x :1,
    y:2,
    },
    draw : function () {
      
        console.log ('Draw a circle'); 
    }

}

console.log (circle.location);

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

// Example 2 


function createRobot (name) {
return {
    name: name,
    talk : function (){
  
        console.log ('My name is '+ name + 'The Robot');

    }

};
}

const robot1 = createRobot ('waqas');

console.log (robot1);


// constructor functions 
