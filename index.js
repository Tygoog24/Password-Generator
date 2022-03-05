// when a person selects one criteria for uppercase they are supposed to get an assortment of letters that are capitalized
// when a person selects one criteria for lowercase they get an assortment of letters that are lowercased
// when a person selects one criteria for symbols they get an assortment of symbols
// when a person selects one criteria for numbers they get an assortment of numbers
//when they move the range bar they can determine the amount characters for their password
//when they click generate password we have to first check that one criteria has been selected
//when they click generate password they are supposed to get a combination of letters uppercase/lowercase, symbols and numbers
//when they press generate password an assortment of symbol, letters, and numbers will appear and they copy the information from the page
//End of pseudocode

//declares my variables 
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const form = document.getElementById('passwordGeneratorForm');
const characterAmountNumber = document.getElementById('slider');
const submit = document.getElementById('submit');
const passwordLength = document.getElementById('slider');

// variables for our functions
let symbols = '!@#$%^&*()-';
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers= '1234567890';

// we have 52 letters, 10 numbers, and 11 symbols
//we have 73 characters in total
//user can pick password between 8 characters and 128 characters for length
//we want to give them a random assorted password that allows them to choose uppercase, lowercase, numbers and symbols


//if uppercase letters are pulled, then is random uppercase character
function getUppercase(length) {
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let passwordResult = '';
    for ( let i = 0; i < length; i++ ) {
        passwordResult += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }
    console.log ("getUppercase", passwordResult);
    return passwordResult;

}
getUppercase(8);


//generate random lowercase letters
function getLowercase(length) {
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let passwordResult = '';
    for ( let i = 0; i < length; i++ ) {
        passwordResult += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    }
    console.log ("getLowercase", passwordResult);
    return passwordResult;

}
getLowercase(16);

//generate random lowercase letters
function getSymbols(length) {
    let symbols = '!@#$%^&*()-';
    let passwordResult = '';
    for ( let i = 0; i < length; i++ ) {
        passwordResult += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    console.log ("getSymbols", passwordResult);
    return passwordResult;

}
getSymbols(20);


//generate random lowercase letters
function getNumbers(length) {
    let numbers= '1234567890';
    let passwordResult = '';
    for ( let i = 0; i < length; i++ ) {
        passwordResult += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    console.log ("getNumbers", passwordResult);
    return passwordResult;

}
console.log('passwordLength',passwordLength.value);
getNumbers(passwordLength.value);


/*
function generatepassword {
    for (let i=0; i< length; i++ ) { 
        passwordResult+= Math.floor(Math.random()* .length);
    }
    getSymbols ();
    getNumbers();
    getLowercase();
    getUppercase();
    }
}



/*
function generatepassword () {
//lets the computer know all the variables we want pulled
let allcharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-123456789abcdefghijklmnopqrstuvwxyz" ;
//we are trying to slice characters and get a string of values that are equal to the password length
console.log(Math.floor(Math.random()*(allcharacters.length-1)));
document.getElementById('showpassword').innerText = allcharacters;
console.log ("allcharacters", allcharacters);
console.log ("uppercase",uppercase);
console.log ("uppercase+ lowercase",uppercase + lowercase);
console.log ("numbers",numbers);
console.log ("symbol",symbol);
console.log ('lowercase',includeLowercase.checked);
console.log ('uppercase', includeUppercase.checked)
console.log ('numbers', includeNumbers.checked);
console.log ('symbol', includeSymbols.checked);



   if(includeUppercase.checked && includeLowercase.checked && includeNumbers.checked && includeSymbols.checked) {
    console.log ("a");
    let allcharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-123456789abcdefghijklmnopqrstuvwxyz" ;
    document.getElementById('showpassword').innerText =Math.floor(Math.random()*(allcharacters.length-1));



    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log(Math.floor(Math.random()*(uppercase.length-1)));
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    console.log(Math.floor(Math.random()*(lowercase.length-1)));
    let symbol = '!@#$%^&*()-';
    console.log(Math.floor(Math.random()*(symbols.length-1)));
    let numbers= '1234567890';
    console.log(Math.floor(Math.random()*(numbers.length-1)));


    //if all the above condition is met all characters will be sliced to the h3 id of showpassword
    let allcharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-123456789abcdefghijklmnopqrstuvwxyz" ;
    document.getElementById('showpassword').innerText = allcharacters;
   }

    else if(includeUppercase.checked && includeLowercase.checked) {
        let lowercase = 'abcdefghijklmnopqrstuvwxyz';
        let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        document.getElementById('showpassword').innerText = Math.floor(Math.random()*(lowercase + uppercase.length-1));
return;

    }
    else if (includeNumbers.checked && includeSymbols.checked) {
        let random = Math.random()*(numbers&& symbols.length-1)
        let allcharacters = numbers + symbol;
        document.getElementById('showpassword').innerText = Math.floor(Math.random()*(lowercase && uppercase.length-1));
    }

    else if (includeLowercase.checked && includeSymbols.checked) {
    }
    
    else if (includeUppercase.checked && includeSymbols.checked) {
    }

    else if (includeUppercase.checked && includeNumbers.checked) {
    }

    else if (includeLowercase.checked && includeNumbers.checked) {
    }
}

*/