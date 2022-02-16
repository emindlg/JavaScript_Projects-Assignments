let icon = document.querySelector(".fas");
let inputform1 = document.querySelector("#inputform");
let taskToDo = document.querySelector(".taskToDo");
let container = document.querySelector(".container");



icon.addEventListener("click", ()=>{
    let paragraph = document.createElement('p');
    taskToDo.appendChild(paragraph);    
    paragraph.innerHTML = inputform1.value;
    inputform1.value = "";

});
    
    
    
//icon.addEventListener("click", ()=>{
//    let paragraph = document.createElement  ('p');        
//    taskToDo.remove('p'); 
//    alert("please enter your task to the texarea...");
//});


    

    
















function empty(inputform1) {
    
}


icon.addEventListener("click", ()=>{
    taskToDo.remove('p'); 
    alert("please enter your tesk to the texarea...");
 }) 