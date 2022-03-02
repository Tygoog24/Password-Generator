//one way we could do it
make a randomized generator
//create function for it
function randomizegenerator{
//make a variable with all characters included
var character="1234567890abcdefghijklmnopqrstuvxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//make a varaiable determining the password length
var passwordlength="128";
//make a variable thats empty so we can give value later
var password="";

//create a formula to generate random password
for (var i = 0; i <passwordlength; i++ ){
    var randomnumber = Math.floor(Math.random()) * character.length);
    //substring pulls the variables from var character and will place them in different positions
    password+= characters.substring(randomnumber, random number +1);
}
    //this is outside the for loop so each time you click create it will create a random form of numbers
    document.getElementbyId("password").value=password;
}
------------//ignore the above its one way we could do it

// Create variables for passwords
//seperate the lower case from uppercase
let lowercase="abcdefghijklmnopqrstuvxyz"
//seperate the numbers 
let numbers="1234567890"
//seperate the symbols
let symbols="!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
//seperate the uppercase
let uppercase="ABCDEFGHIJKLMNOPQRSTUV"


//create function to copy text
function copytext {
//function will go here
}

//create function to generate password
function generatepassword{
//function will go here
    

//create an alert so they know they copied text
alert("password copied")
}

