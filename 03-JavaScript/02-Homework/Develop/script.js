// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
  function generatePassword() {
    if (confirm("Do you want your password to be at least 8 characters long?")) {
      
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

