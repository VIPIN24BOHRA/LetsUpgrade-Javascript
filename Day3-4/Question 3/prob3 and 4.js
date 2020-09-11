// problem to create array of object.


// creating an array of object.
   let arr=[{

   name:"Vipin",
   age:19,
   country:"India",
   hobbies: ["reading","coding","workout"]
   
  },

  {

    name:"Harry",
    age:20,
    country:"England",
    hobbies: ["playing","doing magic","Helping"],
    
   },
 
   {

    name:"Avengers",
    age:100,
    country:"USA",
    hobbies: ["fighting","Saving world","Entertain us"],
    
   }
 


];

// function to display all object in console.
function display (){

  arr.forEach(function(a){

   console.log(a);

  });

}
display();  //calling function.


//problem no 4. creating a function to print object having age less than 30.
function displayAgeLessThan30(){

arr.forEach(function(a){

  if(a.age<30){

   console.log(a);


  }
});


}
displayAgeLessThan30();//calling function.
// function to display object having country name India.
function displayIndia() {
  
 arr.forEach(function (a) {


  if(a.country=="India"){

  console.log(a);
  }
   
 });

}

displayIndia();//calling function.


