// Variable definition
var pwdLength = 0;
var inclUpper = "";
var inclLower = "";
var inclNumber = "";
var inclSpecial = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	// prompt for parameters to determine password construct
	// 1.  Parameter 1 - Password length '

	pwdLength = prompt(
		"Password must be between 8 and 128 characters.  How many characters in your password?"
	);

	console.log(pwdLength);

	// Cancel selected on Prompt - no password
	if (!pwdLength) {
		password = "Cancel selected - number of characters - No password generated";
		var passwordText = document.querySelector("#password");

		passwordText.value = password;
		return password;
	}

	// Password length must be between 8 and 128 characters

	if (pwdLength < 8 || pwdLength > 128) {
		alert("Number of characters must be 8 or more and 128 or less");
		return;
	}

	// 2.  Parameter 2 - Include upper case letters

	inclUpper = prompt("Include UPPER CASE letters in your password? (y or n)");

	// Cancel selected on Prompt - no password
	if (!inclUpper) {
		password = "Cancel selected - include Upper Case - No password generated";
		var passwordText = document.querySelector("#password");

		passwordText.value = password;
		return password;
	}

	inclUpper.toLowerCase;

	// Include upper case must be y or n

	if (inclUpper !== "n" && inclUpper !== "y") {
		alert("Must answer y or n to including Upper Case characters");
		return;
	}

	// 3.  Parameter 3 - Include lower case letters

	inclLower = prompt("Include lower case letters in your password? (y or n)");

	// Cancel selected on Prompt - no password
	if (!inclLower) {
		password = "Cancel selected - include Lower Case - No password generated";
		var passwordText = document.querySelector("#password");

		passwordText.value = password;
		return password;
	}

	inclLower.toLowerCase;

	// Include lower case must be y or n

	if (inclLower !== "n" && inclLower !== "y") {
		alert("Must answer y or n to including Lower Case characters");
		return;
	}

	// 4.  Parameter 4 - Include numeric characters

	inclNumber = prompt("Include Numeric characters in your password? (y or n)");

	// Cancel selected on Prompt - no password
	if (!inclNumber) {
		password = "Cancel selected - include Numeric - No password generated";
		var passwordText = document.querySelector("#password");

		passwordText.value = password;
		return password;
	}

	inclNumber.toLowerCase;

	// Include Numeric must be y or n

	if (inclNumber !== "n" && inclNumber !== "y") {
		alert("Must answer y or n to including Numeric characters");
		return;
	}

	// 5.  Parameter 5  - Include special characters

	inclSpecial = prompt("Include Special characters in your password? (y or n)");

	// Cancel selected on Prompt - no password
	if (!inclSpecial) {
		password = "Cancel selected - include Special - No password generated";
		var passwordText = document.querySelector("#password");

		passwordText.value = password;
		return password;
	}

	inclSpecial.toLowerCase;

	// Include Numeric must be y or n

	if (inclSpecial !== "n" && inclSpecial !== "y") {
		alert("Must answer y or n to including Special characters");
		return;
	}

	// All prompts answered - now generate password using selected parameters
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Assignment code called this function in the provided writePassword function
// but it did not exist.  Created it here and returned the calculated password
function generatePassword(password) {
	var password = "";
	var validChars = "";

	// Use answers to prompts to build a string of allowable characters based on responses

	if (inclUpper === "y") {
		validChars = validChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}

	if (inclLower === "y") {
		validChars = validChars + "abcdefghijklmnopqrstuvwxyz";
	}

	if (inclNumber === "y") {
		validChars = validChars + "0123456789";
	}

	if (inclSpecial === "y") {
		validChars = validChars + " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
	}

	for (let i = 0; i < pwdLength; i++) {
		var char = Math.floor(Math.random() * validChars.length + 1);

		password += validChars.charAt(char);
	}

	return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
