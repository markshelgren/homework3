console.log(document);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Assignment code called this function in the provided writePassword function
// but it did not exist.  Created it here and returned the calculated password
function generatePassword(password) {
	var password = "";
	password = "XXXYYYZZZ000!@#";
	return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
