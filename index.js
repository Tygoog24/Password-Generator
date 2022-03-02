//create variables to establish a function
const characterAmountRange = document.getElementById ('characterAmountRange')
const characterAmountNumber = document.getElementById ('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbersUppercase')
const includeUSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('generatedPasswordForm')



//this will link number to range
characterAmountNumber.addEventListener ('input', linkCharacterAmount)
characterAmountRange.addEventListener ('input', linkCharacterAmount)

//this will control how the slider changes alongside the number value
function linkCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}
