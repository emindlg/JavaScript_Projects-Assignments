let enterNumber = document.getElementById("inputguess");
console.log(enterNumber);

let control = document.getElementById("buton");
console.log(control);

let sonuc = document.getElementById("sonucyazısı");
console.log(sonuc);

let kalanhak1 = document.getElementById("kalanhak");

let kaldıhakk = document.getElementById("hakkımkaldı")


const rndmsayı = Math.floor((Math.random()*30) + 1);



let hak = 5;




control.addEventListener("click", ()=>{

       
    
    
    if (enterNumber.value == rndmsayı) {
        
        sonuc.innerText = ("Tebrikler");
        //kalanhak1.innerText = (`deneme sayısı ${sayac}`);
        kaldıhakk.innerText = (`${5 - hak}. hakkınızda bildiniz :) `)
        kalanhak1.innerText = ""
        
        
        
    } 
    
    else {

        hak -=1;

        if (hak == 0){
            enterNumber.disabled = true;
            kaldıhakk.innerText = ( "Üzgünüm..Hakkınız bitti :(" );
            sonuc.innerText = "";
            kalanhak1.innerText = ""
            
            

            
        }
        
        
        else if (enterNumber.value > rndmsayı) {
            sonuc.innerText = ("Biraz aşağı");
            
            kaldıhakk.innerText = (`${hak} deneme hakkınız kaldı`)
            kalanhak1.innerText = (`Lütfen 0 ile ${enterNumber.value} arasında bir sayı girin.`);
            
             
        } 
          else if (enterNumber.value < rndmsayı )
        {
            sonuc.innerText = ("Biraz yukarı");
            kalanhak1.innerText = (`Lütfen ${enterNumber.value} ile 30 arasında bir sayı girin.`);
            kaldıhakk.innerText = (`${hak} deneme hakkınız kaldı`)
        }
    }
    
    
       
})
















