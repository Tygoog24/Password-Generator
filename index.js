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


//if uppercase letters are pulled, then is random uppercase character
function getUppercase(length) {
    let passwordResult = '';
    for ( let i = 0; i < length; i++ ) {
        passwordResult += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }
    console.log ("getUppercase", passwordResult);
    return passwordResult;

}



//generate random lowercase letters
function getLowercase(length) {
    let passwordResult = '';
    for ( let i = 0; i < length; i++ ) {
        passwordResult += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    }
    console.log ("getLowercase", passwordResult);
    return passwordResult;

}


//generate random symbols letters
function getSymbols(length) {
    let passwordResult = '';
    for ( let i = 0; i < length; i++ ) {
        passwordResult += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    console.log ("getSymbols", passwordResult);
    return passwordResult;

}



//generate random numbers letters
function getNumbers(length) {
    let passwordResult = '';
    for ( let i = 0; i < length; i++ ) {
        passwordResult += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    console.log ("getNumbers", passwordResult);
    return passwordResult;

}
//console.log to check if the variables and their values are correct
console.log('passwordLength',passwordLength.value);
getNumbers(passwordLength.value);

console.log ("uppercase",uppercase);
console.log ("uppercase+ lowercase",uppercase + lowercase);
console.log ("numbers",numbers);
console.log ("symbols",symbols);
console.log ('lowercase',includeLowercase.checked);
console.log ('uppercase', includeUppercase.checked)
console.log ('numbers', includeNumbers.checked);
console.log ('symbols', includeSymbols.checked);

//function to generate the user's password
function generatepassword() {

   if(includeUppercase.checked && includeLowercase.checked && includeNumbers.checked && includeSymbols.checked) {
    console.log ("a");
    let newcharacters= getUppercase(passwordLength.value) + getLowercase(passwordLength.value) + getNumbers(passwordLength.value) + getSymbols(passwordLength.value);
    console.log("newcharacters", newcharacters);
    let newpassword = '';
    length = passwordLength.value;
    for ( let i = 0; i < length; i++ ) {
        newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
    }
    document.getElementById('showpassword').innerText=newpassword;
    console.log ("generatepassword", newpassword);
    return newpassword;
    }

    else if(includeUppercase.checked && includeLowercase.checked) {
        console.log ("b");
        let newcharacters= getUppercase(passwordLength.value) + getLowercase(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }

    else if(includeUppercase.checked && includeLowercase.checked && includeNumbers.checked) {
        console.log ("c");
        let newcharacters= getUppercase(passwordLength.value) + getLowercase(passwordLength.value) + getNumbers(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }

    else if(includeUppercase.checked && includeSymbols.checked && includeNumbers.checked) {
        console.log ("d");
        let newcharacters= getUppercase(passwordLength.value) + getSymbols(passwordLength.value) + getNumbers(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
        
    }

    else if(includeUppercase.checked && includeLowercase.checked && includeSymbols.checked) {
        console.log ("e");
        let newcharacters= getUppercase(passwordLength.value) + getLowercase(passwordLength.value) + getSymbols(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }

    else if(includeUppercase.checked && includeNumbers.checked) {
        console.log ("f");
        let newcharacters= getUppercase(passwordLength.value) + getNumbers(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }
    else if(includeUppercase.checked && includeSymbols.checked) {
        console.log ("g");
        let newcharacters= getUppercase(passwordLength.value) + getSymbols(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }
    else if(includeLowercase.checked && includeNumbers.checked) {
        console.log ("h");
        let newcharacters= getLowercase(passwordLength.value) + getNumbers(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }

    else if(includeLowercase.checked && includeSymbols.checked) {
        console.log ("i");
        let newcharacters= getLowercase(passwordLength.value) + getSymbols(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }
    
    else if(includeLowercase.checked && includeNumbers.checked && includeSymbols.checked) {

        console.log ("j");
        let newcharacters= getLowercase(passwordLength.value) + getNumbers(passwordLength.value) + getSymbols(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
        }

    else if(includeNumbers.checked && includeSymbols.checked) {

        console.log ("k");
        let newcharacters= getNumbers(passwordLength.value) + getSymbols(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }
    else if(includeSymbols.checked) {

        console.log ("L");
        let newcharacters= getSymbols(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }
    else if(includeUppercase.checked) {

        console.log ("m");
        let newcharacters= getUppercase(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }
    else if(includeLowercase.checked) {

        console.log ("n");
        let newcharacters= getLowercase(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }
    else if(includeNumbers.checked) {

        console.log ("o");
        let newcharacters= getNumbers(passwordLength.value);
        console.log("newcharacters", newcharacters);
        let newpassword = '';
        length = passwordLength.value;
        for ( let i = 0; i < length; i++ ) {
            newpassword += newcharacters.charAt(Math.floor(Math.random() * newcharacters.length));
        }
        document.getElementById('showpassword').innerText=newpassword;
        console.log ("generatepassword", newpassword);
        return newpassword;
    }
    else {
        alert("Please Check at least one box");

    }
}