// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


   
  
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  function writePassword() {

    getPasswordInfo();

  }
  
  // Collect length and types of chars from user
  function getPasswordInfo() {
    var pwdLength = prompt("Please enter length (8-128 chars)");
      if (pwdLength == null || pwdLength == "" || pwdLength <=8 || pwdLength >=128) {
        window.alert("Please enter a valid value");
      }

      lowerSelect = prompt("Include lowercase characters? Y/N");
      lowerSelect = lowerSelect.toUpperCase();
      if (lowerSelect == "Y" || lowerSelect == "N") {
        lowerBool = convertBool(lowerSelect);
        console.log("Val returned "+lowerBool);
      } else {
        window.alert("Please answer Y or N");
      }
      upperSelect = prompt("Include uppercase characters? Y/N");
      upperSelect = upperSelect.toUpperCase();
      if (upperSelect == "Y" || upperSelect == "N") {
        upperBool = convertBool(upperSelect);
        console.log("Val returned "+upperBool);
      } else {
        window.alert("Please answer Y or N");
      }
      numericSelect = prompt("Include numeric characters? Y/N");
      numericSelect = numericSelect.toUpperCase();
      if (numericSelect == "Y" || numericSelect == "N") {
        numericBool = convertBool(numericSelect);
        console.log("Val returned "+numericBool);
      } else {
        window.alert("Please answer Y or N");
      }
      specialSelect = prompt("Include special characters? Y/N");
      specialSelect = specialSelect.toUpperCase();
      if (specialSelect == "Y" || specialSelect == "N") {
        specialBool = convertBool(specialSelect);
        console.log("Val returned "+specialBool);
      } else {
        window.alert("Please answer Y or N");
      }
    }  

    
    
    function convertBool(input) {
      if (input == "Y") {
        return true;
      } else {
        return false;
      }
      } 
    

    var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
