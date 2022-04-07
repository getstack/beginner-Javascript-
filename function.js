// First Class functions 

// Spread Opeartor 

// const person = {

// Name : 'waqas',
// Age : '30',

// }

// const list = {
// ...person

// }

// console.log(list);




// Classes 
fetch ('https://api.covid19api.com/').then ((apidata) =>{

console.log (apidata);
return apidata.json();

} ).then ((result)=> {

console.log (result.travelAdvicePremium);


}).catch((error)=>{

console.log (error);

})








