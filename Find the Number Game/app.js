let enterNumber = document.getElementById("inputguess");
console.log(enterNumber);

let control = document.getElementById("buton");
console.log(control);

let sonuc = document.getElementById("sonucyazısı");
console.log(sonuc);

const rndmsayı = Math.floor((Math.random()*10) + 1);

hak = 3;




control.addEventListener("click", ()=>{

   
    
    if (enterNumber.value == rndmsayı && hak) {

        sonuc.innerText = ("Tebrikler");
        
    } else if (enterNumber.value > rndmsayı) {
        sonuc.innerText = ("Biraz aşağı");
         
    } 
      else if (enterNumber.value < rndmsayı )
    {
        sonuc.innerText = ("Biraz yukarı");
    }
       
})















