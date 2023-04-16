// Globals
var lowerBool = undefined;
var upperBool = undefined;
var numericBool = undefined;
var specialBool = undefined;
var pwdLength = undefined;
var password = undefined;
var charArray = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


   
  
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  

  
  
  
  
  
  function writePassword() {

    getPasswordInfo();  // Get password requirements from user and convert to boolean

    checkSelection();   // Check at least one type of character is selected

    assembleCharArray();  // Assemble array of character possibilities
    console.log(charArray);
    password = buildPass(); // Build password

    console.log(password);

    var password = writePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    
  }
  
  // Collect length and types of chars from user
  function getPasswordInfo() {
      pwdLength = prompt("Please enter length (8-128 chars)");
      if (pwdLength == null || pwdLength == "" || pwdLength < 8 || pwdLength > 128) {
        window.alert("Please enter a valid value");
      }
      console.log(pwdLength);

      lowerSelect = prompt("Include lowercase characters? Y/N");
      lowerBool = convBool(lowerSelect);
      console.log("lower " + lowerBool);

      upperSelect = prompt("Include uppercase characters? Y/N");
      upperBool = convBool(upperSelect);
      console.log("upper " + upperBool);

      numericSelect = prompt("Include numeric characters? Y/N");
      numericBool = convBool(numericSelect);
      console.log("numeric " + numericBool);

      specialSelect = prompt("Include special characters? Y/N")
      specialBool = convBool(specialSelect);
      console.log("special " + specialBool);
    }

    function convBool(input) {
        input = input.toUpperCase();
        if (input == "Y") {
          return true;
        } else if (input == "N") {
          return false;
        } else {
          window.alert("Please enter Y or N");
        }
      }
    
    function checkSelection() {
      boolTotal = lowerBool + upperBool + numericBool + specialBool;
      console.log("Boolean Total = " + boolTotal);
      if (boolTotal == 0) {
        window.alert("Please select at least one character type");
      }
    }

    function assembleCharArray() {
      
      console.log(lowerBool);
      console.log(upperBool);
      console.log(numericBool);
      console.log(specialBool);
      if (lowerBool == true) {
        console.log("lower");
        for (var i = 97; i <= 122; i++) {
          charArray.push(String.fromCharCode(i));
        }
      }
       if (upperBool == true) {
        console.log("upper");
        for (var i = 65; i <= 90; i++) {
          charArray.push(String.fromCharCode(i));
        }
      }
      if (numericBool == true) {
        console.log("numeric");
        for (var i = 48; i <= 57; i++) {
          charArray.push(String.fromCharCode(i));
        }
      } 
      if (specialBool == true) {
        console.log("special");
        for (var i = 33; i <= 47; i++) {
          charArray.push(String.fromCharCode(i));
        }
      } 
        // console.log(charArray);
      }

    function buildPass() {
      var str = "";
      console.log("Pwd Length is " + pwdLength);
      console.log(charArray);
      for (var i = 1; i <= pwdLength; i++) {
        var randomItem = charArray[Math.floor(Math.random() * charArray.length)];
        str += randomItem;
        console.log(randomItem);
      }
      console.log(str);
      return str;
    }
      
    
  

  
