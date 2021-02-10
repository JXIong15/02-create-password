// Assignment Code

// Calls on the button from the html doc
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // calls on the password from the html doc

  passwordText.value = password; // sets the password from the html doc to the password in this js doc

  password = "";
  
  // generates the new password
  function generatePassword() {
    char = charSet();
    var passLength = 0;

    "From 8-128 characters, how long do you want your password length?" {
      if (passLength < 8 || passLength > 128) {
        error "Your password has to be between 8 - 128 characters."
      }
      password.length = passLength;

      // adds a random character from the specified character set to the password for the desired password length
      for (i = 0; i < passLength + 1; i++) {
        password += random character from char 
      }
    }
  }
  return password;
}

// establishes the characters to be used
function charSet() {
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var num = "1234567890";
  var spec = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var char = "";

  // to make sure the user does not select "no" to every option.
  while (char = "") {
    "Do you want uppercase letters in your password?" {
      if (yes) {
        char += upperChar;
      }
      "Do you want lowercase letters in your password?" {
        if (yes) {
          char += lowerChar;
        }
        "Do you want numeric values in your password?" {
          if (yes) {
            char += num;
          }
          "Do you want special characters in your password?" {
            if (yes) {
              char += spec;
            }
            if (char = "") {
              "Please select 'yes' to at least one character option."
            }
            else {
              return char;
            }
          }
        }
      }
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
