// Program to search for an element in a arrry of string.

let arr =["America","India","Russia","Japan","Norway"]; // array of string of 5 elements.
let search;  // element to be searched.
let index=-1; // store the index of element if present.
search = "Japan";

for (let i =0;i<arr.length;i++){  // transversing through array and searching element.
    if (arr[i]===search){  // if element is present.
    
      console.log(search + " is present in array at index :" + i);
        index=i;
      break;  // no need to transverse if you find the element.
    } 
}
if (index==-1){ // if element is not present.
 console.log(search+" is not present in array"); 
  
}

