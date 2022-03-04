const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const form = document.getElementById('passwordGeneratorForm');
const characterAmountNumber = document.getElementById('slider');
const submit = document.getElementById('submit');
const passwordlength = document.getElementById('slider')

// variables for our functions
let symbol = '!@#$%^&*()-';
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers= '1234567890';


function generatepassword () {
    //lets the computer know all the variables we want pulled
    let allcharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-123456789abcdefghijklmnopqrstuvwxyz" ;
    //we are trying to slice characters and get a string of values that are equal to the password length
   let random = Math.floor(Math.random() * 20);
   let newchar = allcharacters.slice(random, 20);
   console.log (newchar);
   console.log (allcharacters);
   console.log (uppercase);
   console.log (uppercase + lowercase);
   console.log (numbers);
   console.log (symbol);
   

   if(includeUppercase.checked && includeLowercase.checked && includeNumbers.checked && includeSymbols.checked) {
    let random = Math.floor(Math.random() * 20);
    //if all the above condition is met all characters will be sliced to the h3 id of showpassword
    let allcharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-123456789abcdefghijklmnopqrstuvwxyz" ;
    // pulling the inner text of the h3 and changing it into the new sliced string
    document.getElementById('showpassword').innerText = allcharacters.slice(random, random + +passwordLength.value);
    console.log(allcharacters.slice(random, random + +passwordLength.value));
}
    else if(includeUppercase.checked && includeLowercase.checked) {
        let random = Math.floor(Math.random() * 20);
        let allcharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;
        document.getElementById('showpassword').innerText = allcharacters.slice(random, random + +passwordLength.value);
    }

    else if (includeNumbers.checked && includeSymbols.checked) {
        let random = Math.floor(Math.random() * 20);
        let allcharacters = numbers + symbol;
        document.getElementById('showpassword').innerText = allcharacters.slice(random, random + +passwordLength.value);
    }

    else if (includeLowercase.checked && includeSymbols.checked) {
        let random = Math.floor(Math.random() * 20);
        let allcharacters = lowercase + symbol;
        document.getElementById('showpassword').innerText = allcharacters.slice(random, random + +passwordLength.value);
    }
    
        else if (includeUppercase.checked && includeSymbols.checked) {
        let random = Math.floor(Math.random() * 20);
        let allcharacters = uppercase + symbol;
        document.getElementById('showpassword').innerText = allcharacters.slice(random, random + +passwordLength.value);
    }

    else if (includeUppercase.checked && includeNumbers.checked) {
        let random = Math.floor(Math.random() * 20);
        let allcharacters = uppercase + numbers;
        document.getElementById('showpassword').innerText = allcharacters.slice(random, random + +passwordLength.value);
    }

    else if (includeLowercase.checked && includeNumbers.checked) {
        let random = Math.floor(Math.random() * 20);
        let allcharacters = lowercase + numbers;
        document.getElementById('showpassword').innerText = allcharacters.slice(random, random + +passwordLength.value);
    }
}


generatepassword();
