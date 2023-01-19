// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0,', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '$', '%', '^', '&', '*', '+'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
    passwordText.value = password;

}



function generatePassword() {
  var password = "";
  var characters = [];

  passwordLength = parseInt(prompt("How long do you want your password to be?"));


  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Password must be at least 8 characters but not more than 128");
  return false;
  }

  if (confirm("Do you want your password to have lowercase letters?")); {
    characters = characters.concat(lowerCase);
  }

  if (confirm("Do you want your password to have uppercase letters?")); {
    characters = characters.concat(upperCase);
  }

  if (confirm("Do you want your password to have numbers?")); {
    characters = characters.concat(numbers);
  }

  if (confirm("Do you want your password to have speacial characters")); {
    characters = characters.concat(special);
  }

  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * characters.length);
    password = password + characters[random];
  }
  return password;
}


 



