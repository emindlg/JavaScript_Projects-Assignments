let plus = document.getElementById("plus");
let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let minus = document.getElementById("minus");
let minus1 = document.getElementById("minus1");
let minus2 = document.getElementById("minus2");
let pfirst = document.getElementById("pfirst");
let psecond =document.getElementById("psecond");
let pthird =document.getElementById("pthird");
let button = document.getElementsByTagName("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let dlt = document.getElementById("firstbutton");
let oneP = document.getElementById("oneP");
let firstbutton = document.getElementById("firstbutton");
let secondbutton = document.getElementById("secondbutton");
let thirdbutton = document.getElementById("thirdbutton");




//---------TOTAL SECTİON----------:

let subtotal = document.getElementById("subtotal");
let tax = document.getElementById("tax");
let shipping = document.getElementById("shipping");
let total = document.getElementById("total");
let bs1 = document.getElementById("bs1");
let bs2 = document.getElementById("bs2");
let bs3 = document.getElementById("bs3");
let bs4 = document.getElementById("bs4");




//----------DOM EVENT-------------:


// 

plus.addEventListener("click", ()=>{

    let increament = input1.value;
    input1.value = ++increament;
    

    firsttotal = "$" + 25.98 * `${input1.value}`;
    console.log(input1.value);
    oneP.innerText = "Product Total: $" + (25.98 * `${input1.value}`).toFixed(2);       
    //bs1.innerHTML = firsttotal;
            
        
         
        
        

        
    
});

minus.addEventListener("click", ()=>{

    if (input1.value === "1"){
        minus.disabled = false;
        //firsttotal.innerHTML = `$25.98`;
        console.log(firsttotal.innerHTML);}

    else{
        console.log(input1.value);

        //firsttotal = "$" + 25.98 * `${input1.value}`;
        let decreament = input1.value;
        input1.value = --decreament;
        firsttotal = "$" + 25.98 * `${input1.value}`;
        oneP.innerText = "Product Total: $" + (25.98 * `${input1.value}`).toFixed(2);
    }    
        
    
    
    
});

//----------Second Input-----------:


plus1.addEventListener("click", ()=>{

    
    let increament1 = input2.value;
    input2.value = ++increament1;
    firsttotal = "$" + 45.99 * `${input2.value}`;
    oneP.innerText = "Product Total: $" + (45.99 * `${input2.value}`).toFixed(2);       
    bs1.innerHTML = firsttotal ;
   
    
    

});

minus1.addEventListener("click", ()=>{

    if (input2.value === "1"){
        return;
    }

    let decreament1 = input2.value;
    input2.value = --decreament1;
   
});

//----------Third Input-----------:


plus2.addEventListener("click", ()=>{

    
    let increament = input3.value;
    input3.value = ++increament;

});

minus2.addEventListener("click", ()=>{

if (input3.value === "1"){
    return;
   }

   let decreament = input3.value;
    input3.value = --decreament;
   
});


//plus1.addEventListener("click", ()=>{

    
//    let increament1 = input2.value;
//    input2.value = ++increament1;
//    firsttotal = "$" + 45.99 * `${input2.value}`;
//    oneP.innerText = "Product Total: $" + (45.99 * `${input2.value}`).toFixed(2);       
//    bs1.innerHTML = firsttotal;
   
    
    

//});

function sbttl() {

    bs1.innerHTML = input3.value + input3.value +input3.value;
    
};