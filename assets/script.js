
function genPassword() {
  var passwordLength = window.prompt('Choose between 8 and 128 charcters');
  var chars = charSel();
  var passwordText = "";

  for (i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  passwordText += chars.substring(randomNumber, randomNumber + 1);
} return passwordText
}


function charSel() {
  let lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
  let upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '1234567890';
  let specialChar = '!@#$%^&*(),./<>?';

  var useLowerCase = window.confirm('Press OK if you WANT LOWER CASE LETTERS in your password.\n\n Press CANCEL if you DO NOT want LOWER CASE LETTERS in your password');
  var useCapitol = window.confirm('Press OK if you WANT CAPITOL LETTERS in you password.\n\nPress CANCEL if you DO NOT want CAPITOL LETTERS in you password.');
  var useNumbers = window.confirm('Press OK if you WANT NUMBERS in your password.\n\nPress CANCEL if you DO NOT want NUMBERS in your password.');
  var useSpecialSpecialChar = window.confirm('Press OK if you WANT SPECIAL CHARACTERS (--!@#$%^&*(),./<>?--) in your password.\n Press CANCEL if tyou DO NOT want SPECIAL CHARACTERS in your password');

  if (useLowerCase === true && useCapitol === true && useNumbers === true && useSpecialSpecialChar === true) {
    let chars = lowerCaseChar + upperCaseChar + numbers + specialChar;
    return chars;
  } else if (useLowerCase === true && useCapitol === true && useNumbers === true && useSpecialSpecialChar === false) {
    let chars = lowerCaseChar + upperCaseChar + numbers;
    return chars;
  } else if (useLowerCase === true && useCapitol === true && useNumbers === false && useSpecialSpecialChar === true) {
    let chars = lowerCaseChar + upperCaseChar + specialChar;
    return chars;
  } else if (useLowerCase === true && useCapitol === false && useNumbers === true && useSpecialSpecialChar === true) {
    let chars = lowerCaseChar + numbers + specialChar;
    return chars;
  } else if (useLowerCase === false && useCapitol === true && useNumbers === true && useSpecialSpecialChar === true) {
    let chars = upperCaseChar + numbers + specialChar;
    return chars;
  } else if (useLowerCase === true && useCapitol === true && useNumbers === false && useSpecialSpecialChar === false) {
    let chars = lowerCaseChar + upperCaseChar;
    return chars;
  } else if (useLowerCase === true && useCapitol === false && useNumbers === true && useSpecialSpecialChar === false) {
    let chars = lowerCaseChar + numbers;
    return chars;
  } else if (useLowerCase === false && useCapitol === true && useNumbers === true && useSpecialSpecialChar === false) {
    let chars = upperCaseChar + numbers;
    return chars;
  } else if (useLowerCase === false && useCapitol === true && useNumbers === false && useSpecialSpecialChar === true) {
    let chars = upperCaseChar + specialChar;
    return chars;
  } else if (useLowerCase === false && useCapitol === false && useNumbers === true && useSpecialSpecialChar === true) {
    let chars = numbers + specialChar;
    return chars;
  } else if (useLowerCase === true && useCapitol === false && useNumbers === false && useSpecialSpecialChar === true) {
    let chars = lowerCaseChar + specialChar;
    return chars;
  } else if (useLowerCase === true && useCapitol === false && useNumbers === false && useSpecialSpecialChar === false) {
    let chars = lowerCaseChar;
    return chars;
  } else if (useLowerCase === false && useCapitol === true && useNumbers === false && useSpecialSpecialChar === false) {
    let chars = upperCaseChar;
    return chars;
  } else if (useLowerCase === false && useCapitol === false && useNumbers === true && useSpecialSpecialChar === false) {
    let chars = numbers;
    return chars;
  } else if (useLowerCase === false && useCapitol === false && useNumbers === false && useSpecialSpecialChar === true) {
    let chars = specialChar;
    return chars;
  } else {
    window.confirm('You have not choosen any valid character type.\n Please reload page to begin again.');
  };

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

