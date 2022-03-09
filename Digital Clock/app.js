
//let nmr = document.querySelector(".numbers");
//let scr = document.getElementById("screen");

//nmr.addEventListener("load",() => {
    

 
//setTimeout(currentTime (), 1000);



//function currentTime () {
//    let date = new Date();

//    let hh = date.getHours();
//    let mm = date.getMinutes();
//    let ss = date.getSeconds();

//    let resultTime = hh + mm + ss;

//    document.getElementById("screen").innerHTML = resultTime;

//};

//setTimeout();






//console.log(hh);
//console.log(mm);
//console.log(ss);


//let newDisplay = setTimeout (yeniZaman, 5000);


//function yeniZaman() {
//    document.getElementById("screen").innerHTML = "zaman sayacı"
//};



//function example() {
   
//    document.querySelector(".container").innerHTML = "tekrar merhaba";
//} 

//let newDisplay = setTimeout(example, 5000);


//let timeout = setTimeout(deneme, 3000);


//function deneme () {
//    console.log("şimdi buradayım");
//}



//setTimeout( () => {
//    x.innerHTML = "3 second";
//}, 3000);
//setTimeout(() => {
//    x.innerHTML = "5 second";
//}, 5000);
//setTimeout(() => {
//    x.innerHTML = "7 second";
//}, 7000);

//setTimeout(() => {
    
//}, timeout);


//function dgt () {
//    const date = new Date();
//    document.getElementById("screen").innerHTML = date.toLocaleTimeString();
    
    
//};

//setInterval( dgt, 1000);


//let AM_PM = "AM";

//function newTimer () {
    
//    const date = new Date ();
    
//    let h = date.getHours();
//    let mint = date.getMinutes();
//    let sec = date.getSeconds();  
    
//    mint = toTen(mint);
//    sec = toTen(sec);
//    h= hourTime(h);
    

//    document.getElementById("screen").innerHTML = h + ":" + mint + ":" + sec + AM_PM;

//    var t = setInterval(newTimer, 1000);

    
//};



//function toTen (i) {
//    if(i < 10) {
//        i + "0";
//    }
//    return i;
//}

//function hourTime () {
//    if ( h > 12 ){
//        h = h - 12;
//        AM_PM = "PM";
//    }
//    return h;/}





    
    
function newTimer () {
    let todayDate = new Date();
    
    let CurrentHours = todayDate.getHours();
    let CurrentMinutes = todayDate.getMinutes();
    let CurrentSecond = todayDate.getSeconds();

    let CurrentAmPm = CurrentHours >= 12 ? 'PM' : 'AM';

    CurrentHours = CurrentHours % 12;
    CurrentHours = CurrentHours ? CurrentHours : 12; 
    CurrentMinutes = CurrentMinutes < 10 ? '0'+CurrentMinutes : CurrentMinutes;
    CurrentSecond = CurrentSecond < 10 ? '0'+CurrentSecond : CurrentSecond;

    let getDateTime = CurrentHours + ':' + CurrentMinutes + ':' + CurrentSecond + ' ' + CurrentAmPm;

    document.getElementById("screen").innerHTML = getDateTime;
    
}

setInterval(newTimer, 1000);