// Assignment code here
function passwordGenerator(){
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = window.prompt('Choose between 8 and 128 charcters');
var passwordText = "";


  for( i = 0; i =10; i++) {
  var randomNumber= Math.floor(Math.random()*passwordLength)
  passwordText += chars.substring(randomNumber, randomNumber +1)
  return passwordText
  }    
  console.log(randoomNumber)
  debugger
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
