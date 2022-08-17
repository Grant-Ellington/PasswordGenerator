// Assignment code here\


function passwordGenerator(){
let chars ={
  lowerCaseLetters : 'abcdefghijklmnopqrstuvwxyz',
  upperCaseLetters : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '1234567890',
  specialCharacters:'!@#$%^&*(),./<>?',
}

var useCapitol = window.confirm('Press OK if you WANT CAPITOL LETTERS in you password.\n\nPress CANCEL if you DO NOT want CAPITOL LETTERS in you password.');
var useNumbers = window.confirm('Press OK if you WANT NUMBERS in your password.\n\nPress CANCEL if you DO NOT want NUMBERS in your password.')
var useSpecialSpecialCharacters =  window.confirm('Press OK if you WANT SPECIAL CHARACTERS (--!@#$%^&*(),./<>?--) in your password.\n Press CANCEL if tyou DO NOT want SPECIAL CHARACTERS in your password')

if(useCapitol = true, useNumbers=true, useSpecialSpecialCharacters =true ){
  chars = chars.lowerCaseLetters + chars.upperCaseLetters +  chars.numbers + chars.specialCharacters
}
var passwordLength = window.prompt('Choose between 8 and 128 charcters');
var passwordText = "";


  for( i = 0; i <= passwordLength; i++) {
  var randomNumber= Math.floor(Math.random()*chars.length);
  passwordText += chars.substring(randomNumber, randomNumber +1);
  } return passwordText
};


// Get references to the #generate element
var generateBtn = document.querySelector('#generate')



// Write password to the #password input
function writePassword(){
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
