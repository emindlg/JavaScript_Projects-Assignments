let outputminutes = document.getElementById("minutes");
let outputsecond = document.getElementById("second");
let outputmillisec = document.getElementById("millisec");

let buttons = document.getElementById("buttons");

let start = document.getElementById("start");
let clear = document.getElementById("clear");
let pause = document.getElementById("pause");
let numberInput = document.getElementById("numberInput");
let millisec = 00;
let second = 00;
let minutes = 00;

let Interval;


start.addEventListener("click", ()=>{
    
    if (start.className == "bi bi-arrow-right-circle") {
        
        start.className = "bi bi-pause-circle";
        Interval = setInterval(timer, 10);        
        
        return;
        
    }
    clearInterval(Interval);    
    start.className = "bi bi-arrow-right-circle";
    
});



clear.addEventListener("click", () =>{
   clearInterval(Interval);
   outputmillisec.innerText = "00";
   outputsecond.innerText = "00";
   outputminutes.innerText = "00";


})


function timer (){
    
    millisec++; 
    if (millisec < 9){
        outputmillisec.innerText = "0" + millisec;
    }
    if(millisec > 9){
        outputmillisec.innerText = millisec;
    }
    if(millisec > 99){
    second++;
    outputsecond.innerText = "0" + second;
    millisec = 0;
    outputmillisec.innerText = "0" + millisec;
    }  
    if(second > 9) {
        outputsecond.innerText = second;  
    } 
    if (second > 59){
        minutes++;       
        outputminutes.innerText = "0" + minutes;
        second = 0;
        outputsecond.innerText = second;
        outputsecond.innerText = "0" + second;
    } 
};










