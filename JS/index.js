function fizzBuzz() {
let x = document.getElementById("numb").value;
let greeting;
    if ((x%3==0) && (x%5==0)) {
        greeting="FizzBuzz";
    } else if (x%5==0) {
        greeting="Buzz";
    } else if (x%3==0) {
        greeting="Fizz";
    } else {
        greeting="Pop";
    }

document.getElementById("FizzBuzzPopResult").innerHTML = greeting;
}

function averager() {
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
let sum = 0;
for (let i = 0; i < prices.length; i++)
sum += prices[i];
avg = sum / prices.length;

document.getElementById("ap").innerHTML = (avg.toFixed(2));
}





function c2f() {
let x = document.getElementById("deg").value;
ftext="°F";
fahrenheit= (x*(9/5))+32;
document.getElementById("fah").innerHTML = (fahrenheit.toFixed(2)) +  ftext;
}

function c2k() {
let x = document.getElementById("deg").value;
ktext ="K";
kelvin =  (x*1) + 273.15;
document.getElementById("kev").innerHTML = (kelvin.toFixed(2)) + ktext;
}


function f2c() {
let x = document.getElementById("deg2").value;
ctext="°C";
celsius= (x-32) * (5/9);
document.getElementById("cel").innerHTML = (celsius.toFixed(2)) +  ctext;
}
    
function f2k() {
let x = document.getElementById("deg2").value;
ktext ="K";
kelvin2 =  (x-32) * (5/9) + 273.15;
document.getElementById("kev2").innerHTML = (kelvin2.toFixed(2)) + ktext;
}


function pow(){
let x = document.getElementById("ppow1").value;
let y = document.getElementById("ppow2").value;
bangPow =  x**y
document.getElementById("bang2").innerHTML = bangPow;
}

function listPow() {
let x = document.getElementById("ppow1").value;
let y = document.getElementById("ppow2").value;

let text = "";
for (let i = 0; i <y; i++) {
  text += x,i;
}

document.getElementById("bang").innerHTML = text;
}