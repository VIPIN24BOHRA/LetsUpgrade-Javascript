// Program to display only elements containing 'a' in them from an array.

let arr =["Vipin","Bohra","Ramesh","prime","hello","great"]; // array of string.


console.log("Elements that contain 'a' in them are : ");
for (let i=0;i<arr.length;i++){  // transversing through array.
 
 if(arr[i].indexOf('a')!=-1){  // check if 'a' is present.
 
      console.log(arr[i]);   // print the element containing 'a'.
 } 
  
}
