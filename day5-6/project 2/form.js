let table = [];
   
   let slno;

   function addDetails(e){
    e.preventDefault();

    let busDetail =document.getElementsByClassName('srch');
    
    let bus = {

       name:busDetail[0].value,
       source:busDetail[1].value,
       destination:busDetail[2].value,
       passenger:busDetail[3].value,
       capacity:busDetail[4].value,


    };


    if(localStorage.getItem("bus")==null){

     
     table.push(bus);
     let objstr=JSON.stringify(table);
     
     localStorage.setItem("bus",objstr);
     

     display();
    } 
    else {

     let objstr=localStorage.getItem("bus");
    
     let objarr=JSON.parse(objstr);
 
     objarr.push(bus);
    
     localStorage.setItem("bus",JSON.stringify(objarr));
     
     display();

    }
    
    busDetail[0].value="";
    busDetail[1].value="";
    busDetail[2].value="";
    busDetail[3].value="";
    busDetail[4].value="";

      
   }




function display(){

  if(localStorage.getItem("bus")!=null){

  
  let bus=localStorage.getItem("bus");
    let busarr=JSON.parse(bus);
  
  

 let str= "";
   
    slno=0;
    
busarr.forEach(function(a){
    slno++;
   str+=`<tr>
   <td>${slno}</td>
   <td>${a.name}</td>
   <td>${a.source}</td>
   <td>${a.destination}</td>
   <td>${a.passenger}</td>
   <td>${a.capacity}</td>
   <td class="ac" onclick="deleteBtn(this)"><i class="material-icons">delete_forever</i></td>
    </tr>`
 
});
    

document.getElementsByClassName('tbl1')[0].innerHTML =str;
    }

}
display();



          
function checkBus(e){
  e.preventDefault();

    slno=0;

   let tb=document.getElementsByClassName('tbl1')[0];
  tb.style.display="none";
    
 let str1="";
 let vl= document.getElementsByClassName('srch1');
 let objarr=JSON.parse(localStorage.getItem("bus"));



console.log(objarr);
console.log(vl[0].value);
console.log(vl[1].value);
 objarr.forEach(function(a){
     
   if(a.source.toUpperCase().indexOf(vl[0].value.toUpperCase())!=-1 && a.destination.toUpperCase().indexOf(vl[1].value.toUpperCase())!=-1){
       slno++;
     str1+=`<tr>
     <td>${slno}</td>
     <td>${a.name}</td>
     <td>${a.source}</td>
     <td>${a.destination}</td>
     <td>${a.passenger}</td>
     <td>${a.capacity}</td>
     <td class="ac" onclick="deleteBtn(this)"><i class="material-icons">delete_forever</i></td>
      </tr>
      `;
   
   }

  
   
  
 });

 vl[0].value="";
 vl[1].value="";

 
 tb.innerHTML=str1;

 tb.style.display="table-row-group";
 

}

function deleteBtn(vl){

  let num=Number(vl.parentElement.firstElementChild.innerText);

  num--;



  let objarr=JSON.parse(localStorage.getItem("bus"));
 objarr.splice(num,1);
 localStorage.setItem("bus",JSON.stringify(objarr));
 display();
  
  
    
}

function refresh(){

  display();

}





