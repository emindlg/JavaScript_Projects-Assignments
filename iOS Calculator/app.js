let numberValue = document.getElementsByClassName('numbers');            
let allOpt = document.querySelectorAll('.opt');
let smallScreen = document.querySelector(".numberinputsmall");
let bigScreen = document.querySelector(".numberinputbig");
            




for ( var i = 0; i < 11; i++) {
    numberValue[i].addEventListener("click", yazdir);
}

//--------------------FUNCTION:

function yazdir() {
    bigScreen.value = bigScreen.value + this.innerHTML;
}

for (var i = 2; i < 7; i++) {
    allOpt[i].addEventListener("click", islem);

}

//--------------------FUNCTION:

function islem(){
    if (bigScreen.value != ""){
        smallScreen.value = bigScreen.value + this.innerHTML;
        bigScreen.value = ""
    }

    if (bigScreen.value != "" ){
        Array.of(bigScreen.value);
    }
}
   

for (var i = 7; i < 8; i++) {    
    allOpt[i].addEventListener("click", hesapla );

}      

//--------------------FUNCTION:

function  hesapla(){    
    bigScreen.value = smallScreen.value + bigScreen.value
    bigScreen.value = eval(bigScreen.value);
    smallScreen.value ="";   
    
}


allOpt[0].addEventListener("click", sil)

//--------------------FUNCTION:

function sil() {
    bigScreen.value ="";
    
}



allOpt[1].addEventListener("click", step);


//--------------------FUNCTION:

function step(){
    bigScreen.value =  
}

    





























