// Assignment Code

// Calls on the button from the html doc
var generateBtn = document.querySelector("#generate");

// function that establishes the characters to be used
function charSet() {
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var num = "1234567890";
  var spec = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // turning the strings into arrays
  upperChar = upperChar.split("");
  lowerChar = lowerChar.split("");
  num = num.split("");
  spec = spec.split("");
  var char = [];

  // to make sure the user does not select "no" to every option.
  while (char.length == 0) {
    var choice = confirm("Do you want uppercase letters in your password?");
    if (choice == "y" || choice == "yes") {
      char = char.concat(upperChar);
    }
    choice = confirm("Do you want lowercase letters in your password?");
    if (choice) {
      char = char.concat(lowerChar);
    }
    choice = confirm("Do you want numeric values in your password?");
    if (choice) {
      char = char.concat(num);
    }
    choice = confirm("Do you want special characters in your password?");
    if (choice) {
      char = char.concat(spec);
    }
    if (char.length == 0) {
      confirm("You must select 'yes' to at least one character option.");
    }
  }
  return char; // returns out character set to the overall function to use
}

// generates the new password
function generatePassword() {
  var char = charSet() // to create our array of desrired characters
  var pass = ""; // an empty string to store our characters for our password
  var passLength;

  // to make sure the password length is a valid number
  while (passLength < 8 || passLength > 128 || passLength == "" || isNaN(passLength)) {
    passLength = prompt("From 8-128 characters, how long do you want your password length? Enter a numeric value.");
  }

  // adds a random character from the specified character set to the password for the desired password length
  for (i = 0; i < passLength; i++) {
    var randomChar = Math.floor(Math.random() * char.length);
    pass += char[randomChar];
  }
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // calls on the password from the html doc

  passwordText.value = password; // sets the password from this js doc to the password in the html doc
}

// Add event listener to generate button, which triggers the created password
generateBtn.addEventListener("click", writePassword);
