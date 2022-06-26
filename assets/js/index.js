var currentNumberdco = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberdco.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberdco.innerHTML = currentNumber;
} 

var currentNumberpar = document.getElementById('currentNumber1');
var currentNumber1 = 0;

function incrementpar() {
    currentNumber1 = currentNumber1 + 2;
    currentNumberpar.innerHTML = currentNumber1;
}

function decrementpar() {
    currentNumber1 = currentNumber1 - 2;
    currentNumberpar.innerHTML = currentNumber1;
}
