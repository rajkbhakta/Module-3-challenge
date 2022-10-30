// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const generatePassword = () => {
  let length = prompt("Enter your password length");
  var typeUpper = prompt(
    "Enter the type of password to include uppercase letters (enter y) : "
  );
  var typeLower = prompt(
    "Enter the type of password to include lowercase letters (enter y) : "
  );
  var typerSpecialCharacters = prompt(
    "Enter the type of password to include special characters (enter y) : "
  );
  var numeric = prompt(
    "Enter the type of password to include numbers (enter y) : "
  );
  if (length >= 8 && length < 128) {
    var password = "";
    var characters = "";
    var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    var numericCharacters = "0123456789";
    var specialCharacters = "!@#$%^&*()";
    // var characters =
    //   "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (typeUpper === "y") {
      characters += upperCharacters;
    }
    if (typeLower === "y") {
      characters += lowerCharacters;
    }
    if (numeric === "y") {
      characters += numericCharacters;
    }
    if (typerSpecialCharacters === "y") {
      characters += specialCharacters;
    }

    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * characters.length);

      password =
        password + characters.substring(randomNumber, randomNumber + 1);
    }
    return password;
  } else {
    alert("please add a valid length");
  }
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//length (>8 && <128)
//type of password
