// when a person selects one criteria for uppercase they are supposed to get an assortment of letters that are capitalized
// when a person selects one criteria for lowercase they get an assortment of letters that are lowercased
// when a person selects one criteria for symbols they get an assortment of symbols
// when a person selects one criteria for numbers they get an assortment of numbers
//when they move the range bar they can determine the amount characters for their password
//when they click generate password we have to first check that one criteria has been selected
//when they click generate password they are supposed to get a combination of letters uppercase/lowercase, symbols and numbers
//when they press generate password an assortment of symbol, letters, and numbers will appear and they copy the information from the page

const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeLowercaseElement = document.getElementById('includeLowercase');
const form = document.getElementById('passwordGeneratorForm');
const characterAmountNumber = document.getElementById('slider');
const submit = document.getElementById('submit');

let symbolstr = '!@#$%^&*()-';
let uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
let numbersstr = '1234567890';

submit.addEventListener ('click', ()=>  {
    if(uppercasestr.checked && lowercasestr.checked && numbersstr.checked && symbolstr.checked) {
        let random = Math.floor(Math.random() * 10);
    }    
})



