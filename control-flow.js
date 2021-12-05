 // if the hour us between 6 and 12 say Good morning 

 
 let hour = 8 ;

 if (hour >= 6 && hour < 12) {

  console.log ('Good afternoon');

 } else {

    console.log ('Good evening');
 }

 // Switch statement 

 let role = 'guest';

 switch (role) {
     case 'guest':
     console.log ('Guest user');    
         
         break;

    case 'modrator':
    console.log('Moderator');
    break;

    case 'admin':
    console.log('Adminitrator');
    break;

     default:
         console.log ('Unknown User')
 }


 // Using If and else 

 let roles ='moderator';


 if (roles === 'guest'){

    console.log('Guest user');

 } else if (roles === 'moderator'){

   console.log ('Moderator user');

 } else {console.log ('Unknown user')}


 //  For loope to count odd numbers


let i = 100 ; 

 for (let i = 1 ; i < 10 ; i++){
   
    if (i % 2 !== 0) {
      
       // console.log (i);
    }
 
 }


// While loope 

let j = 1 ;

while (j < 10){

    if (j % 2 !== 1) console.log (j);
    j++;

}


// For in loope 

const person = {

    Name :'Asif',
    age : 19,
    occupation : 'Driver',

}

for (let key in person){

    console.log(key , person[key]);

}

let colors = ['red','green','blue'];

for (let index in  colors) console.log (index , colors[index])


// Break statment 

let k = 0 ;

while (k < 10){

    if (k == 5) break 
    
    console.log (k);
   k++
}












