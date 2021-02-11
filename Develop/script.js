// Assignment Code

// Calls on the button from the html doc
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var char = charSet()
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // calls on the password from the html doc

  passwordText.value = password; // sets the password from this js doc to the password in the html doc

  // establishes the characters to be used
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
      if (choice) {
        char = char.concat(upperChar);
      }
      console.log(char);
      choice = confirm("Do you want lowercase letters in your password?");
      if (choice) {
        char = char.concat(lowerChar);
      }
      console.log(char);
      choice = confirm("Do you want numeric values in your password?");
      if (choice) {
        char = char.concat(num);
      }
      console.log(char);
      choice = confirm("Do you want special characters in your password?");
      if (choice) {
        char = char.concat(spec);
        console.log(char);
      }
      if (char.length == 0) {
        confirm("You must select 'yes' to at least one character option.");
      }
    }
    console.log(char);
  }

  // generates the new password
  function generatePassword() {
    //   var pass = "";

    //   var passLength = prompt("From 8-128 characters, how long do you want your password length?", "8");
    //   if (passLength < 8 || passLength > 128) {
    //     // error "Your password has to be between 8 - 128 characters."
    //   }
    //   pass.length = passLength;

    //   // adds a random character from the specified character set to the password for the desired password length
    //   for (i = 0; i < passLength + 1; i++) {
    //     // password += random character from char 
    //   }
    //   return pass;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
