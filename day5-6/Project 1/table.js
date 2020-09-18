//array that stores objects.
let table = [{
    
    name:"Vipin",
    age:19,
    city:"Champawat",
    salary:100000,


},
{
   name :"Anshu",
   age: 25,
   city : "Lohaghat",
   salary : 20000,


},
{

    name :"Ashutosh",
   age: 21,
   city : "Nanital",
   salary : 50000,
},
{

    name :"Priyesh",
    age: 22,
    city : "Haldwani",
    salary :50000,
 

},
{
    name :"Riyanshi",
    age: 28,
    city : "Delhi",
    salary : 70000,
  
}

];
   
   let slno;
// to display object in table.
function display(){
    let str= "";
    console.log(str);
    slno=0;
table.forEach(function(a){
    slno++;
   str+=`<tr>
   <td>${slno}</td>
   <td>${a.name}</td>
   <td>${a.age}</td>
   <td>${a.city}</td>
   <td>${a.salary}</td>
   <td class="ac" onclick="deleteBtn(this)"><i class="material-icons">delete_forever</i></td>
    </tr>`
 
});

document.getElementsByClassName('tbl1')[0].innerHTML =str;
console.log(document.getElementsByClassName('tbl1')[0].innerHTML);
}
display();


          
function checkName(){
    slno=0;

   let tb=document.getElementsByClassName('tbl1')[0];
  tb.style.display="none";
    
 let str1="";
 let vl= document.getElementsByClassName('srch1')[0].value;
 table.forEach(function(a){
     
   if(a.name.toUpperCase().indexOf(vl.toUpperCase())!=-1||a.city.toUpperCase().indexOf(vl.toUpperCase())!=-1){
       slno++;
     str1+=`<tr>
     <td>${slno}</td>
     <td>${a.name}</td>
     <td>${a.age}</td>
     <td>${a.city}</td>
     <td>${a.salary}</td>
     <td class="ac" onclick="deleteBtn(this)"><i class="material-icons">delete_forever</i></td>
      </tr>
      `;
   
   }
  
 });
 
 tb.innerHTML=str1;

 tb.style.display="table-row-group";
 

}

function deleteBtn(vl){

  let num=Number(vl.parentElement.firstElementChild.innerText);

  num--;

  table.splice(num,1);
 display();
  
  
    
}







