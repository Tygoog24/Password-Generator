// when a person selects one criteria for uppercase they are supposed to get an assortment of letters that are capitalized
// when a person selects one criteria for lowercase they get an assortment of letters that are lowercased
// when a person selects one criteria for symbols they get an assortment of symbols
// when a person selects one criteria for numbers they get an assortment of numbers
//when they move the range bar they can determine the amount characters for their password
//when they click generate password we have to first check that one criteria has been selected
//when they click generate password they are supposed to get a combination of letters uppercase/lowercase, symbols and numbers
//when they press generate password an assortment of symbol, letters, and numbers will appear and they copy the information from the page
/*
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeLowercaseElement = document.getElementById('includeLowercase');
const form = document.getElementById('passwordGeneratorForm');
const characterAmountNumber = document.getElementById('slider');
const submit = document.getElementById('submit');

let symbol = '!@#$%^&*()-';
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers= '1234567890';


let includeUppercase = document.getElementById('includeUppercase');
console.log (includeUppercase);
*/

function generatepassword () {
    //lets the computer know all the variables we want pulled
    let allcharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-123456789abcdefghijklmnopqrstuvwxyz" ;
    //we are trying to slice characters and get a string of values that are equal to the password length
   let random = Math.floor(Math.random() * 20);
   let newchar = characters.slice(random, 20);
   console.log (newchar);
}

generatepassword();
