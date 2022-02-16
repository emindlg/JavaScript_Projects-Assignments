let icon = document.querySelector("#plus");
let inputform1 = document.querySelector("#inputform");
let taskToDo = document.querySelector(".taskToDo");
let container = document.querySelector(".container");
let trash = document.querySelector("#trash");



icon.addEventListener("click", ()=>{
    
    if (inputform1.value != "") {
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
        
    } else {
        icon.disabled = true;
        alert("please enter something to the text area");
    }
    
            
            
});                 
                
  