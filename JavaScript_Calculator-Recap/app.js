var x = 3

if (x==3){
    console.log(x==3);
}


let a = 3

if (a < 4){
    console.log("Hello");
} else {
    console.log("hello again");
}

//------other question-----

var b = 8

if (b < 4){
    console.log("Hello");
} else {
    console.log("hello again");
}

//------other question-----


/* Switch Case */


//var text;
//var fruits = "Banana"


//switch (fruits) {
//    case "Banana":
//        text = "Banana is good"
//    break;
//    case "Orange":
//        text = "I am not a fan of orange"
//    break;

//    default:
//        text = "I have never heard of that fruits.."
//    break;
//}
//console.log(text);








let number1 = prompt("enter first number: ");
let operator = prompt("what is your operator");
let number2 = prompt("enter second number: ");
let sonuc;

switch (operator) {
    case '+':
        sonuc = number1 + number2;        
        break;
    case '-':
        sonuc = number1 - number2;        
        break;
    case '*':
        sonuc = number1 * number2;        
        break;
    case '/':
        sonuc = number1 / number2;        
        break;

    default:
        break;
}

console.log("işlem Sonucu: " + sonuc);







