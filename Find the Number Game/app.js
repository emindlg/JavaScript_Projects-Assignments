let enterNumber = document.getElementById("inputguess");
console.log(enterNumber);

let control = document.getElementById("buton");
console.log(control);

let sonuc = document.getElementById("sonucyazısı");
console.log(sonuc);

let kalanhak1 = document.getElementById("kalanhak");

let kaldıhakk = document.getElementById("hakkımkaldı")


let rndmsayı = Math.floor(Math.random()*101);


let buyukyakın = 100;
let kucukyakın = 0;


let hak = 8;




control.addEventListener("click", ()=>{

       
    
    
    if (enterNumber.value == rndmsayı && hak > 0) {

        
        
        hak -=1;
        sonuc.innerText = ("Tebrikler");        
        kaldıhakk.innerText = (`${5 - hak}. hakkınızda bildiniz :) `);
        kalanhak1.innerText = "";
        enterNumber.disabled = true;
        control.disabled = true;

                           
        
    } 
    
    else {

        hak -=1;

        if (hak == 0){
            enterNumber.disabled = true;
            control.disabled = true;
            kaldıhakk.innerText = ( "Üzgünüm..Hakkınız bitti :(" );
            sonuc.innerText = "";
            kalanhak1.innerText = ""
            
        }

        
        
        
        else if (enterNumber.value > rndmsayı) {
            sonuc.innerText = ("Biraz aşağı");            
            kaldıhakk.innerText = (`${hak} deneme hakkınız kaldı`);
            buyukyakın = enterNumber.value;
            kalanhak1.innerText = (`Lütfen ${kucukyakın} ile ${buyukyakın} arasında bir sayı girin.`);
            
             
        } 
          else if (enterNumber.value < rndmsayı )
        {   
            kucukyakın = enterNumber.value;
            sonuc.innerText = ("Biraz yukarı");
            kalanhak1.innerText = (`Lütfen ${kucukyakın} ile ${buyukyakın} arasında bir sayı girin.`);
            kaldıhakk.innerText = (`${hak} deneme hakkınız kaldı`)
        }
    }
    
    
    
})
















