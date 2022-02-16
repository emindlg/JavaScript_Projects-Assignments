let icon = document.querySelector("#plus");
let inputform1 = document.querySelector("#inputform");
let taskToDo = document.querySelector(".taskToDo");
let container = document.querySelector(".container");
let trash = document.querySelector("#trash");



icon.addEventListener("click", ()=>{    
    let paragraph = document.createElement('p');
    taskToDo.appendChild(paragraph);    
    paragraph.innerHTML = inputform1.value;
    inputform1.value = "";

        paragraph.addEventListener("click", ()=>{
            paragraph.style.textDecoration = 'line-through'; 
            
                trash.addEventListener("click", ()=>{
                    
                    taskToDo.removeChild(paragraph);
                });

        });
            
            
});                 
                
  