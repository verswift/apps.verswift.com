

//DOM elements -
const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const clipboardButton = document.getElementById('clipboard');

generateButton.addEventListener('click', () => {
    // use the unary operator to convert to an int
    const length = +lengthElement.value
    // check if the checkoxes are checked
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    // call the function for the password generation
    // function that actually generates the password
    // checks that the checkboxes are ticked
    resultElement.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
})

// need to copy to clipboard
clipboardButton.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultElement.innerText;
    
    if (!password) {
        return;
    }
    
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Copied to Clipboard Successfully');
});

// generate password function implementation
function generatePassword(length, lower, upper, number, symbol) {

    // initialise password variable

    // filter out unchecked types

    // loop over the length, calling generator
    // function for each type

    // add the final password to the password variable and return it

    let generatedPassword = '';
    // works because booleans are interpreted as numbers 0 and  1
    const typesCount = lower + upper + number + symbol;

    // wrap each with curly braces to make objects
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        // get the first element of the object array
        // filters out the values in the array if they evaluate to false?
        item => Object.values(item)[0]
    );
    // all the boxes are unchecked so return an empty string
    if (typesCount === 0) {
      return '';
    }

    for(let i = 0; i < length; i+= typesCount)
    {
        // looping through types array for each object of type keys
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    // print out the generated password
    return generatedPassword.slice(0, length);
}


// for mapping the various functions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// the main code for the password generator
//  generator functions
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    // generates an offset from 1 to 26 for lower case
    // for alphabet characters
}

//  generator functions
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    // generates an offset from 1 to 26 for lower case
    // for alphabet characters
}

// random number
function getRandomNumber(){
    return String.fromCharCode( Math.floor(Math.random() * 10) + 48);
    // generates an offset from 1 to 26 for lower case
    // for alphabet characters
}

// random symbol
function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
