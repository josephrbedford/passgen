// Globals
var lowerBool = undefined;
var upperBool = undefined;
var numericBool = undefined;
var specialBool = undefined;
var pwdLength = undefined;
var password = undefined;
var boolTotal = null;
var charArray = [];

 
  

// High level steps
  function writePassword() {
    charArray.length = 0;     // Make sure character array is empty
    getPasswordInfo();        // Get password requirements from user and convert to boolean
    checkSelection();         // Check at least one type of character is selected
    assembleCharArray();      // Assemble array of character possibilities
    password = buildPass();   // Build password
    var passwordText = document.querySelector("#password");   // Pass password back to webpage
    passwordText.value = password;                            // 
    return password;
    }
  
  // Collect length and types of chars from user
  function getPasswordInfo() {
      pwdLength = prompt("Please enter length (8-128 chars)");                                  // Request length of pw from user
        while (pwdLength == null || pwdLength == "" || pwdLength < 8 || pwdLength > 128) {      // Check entry is between 8 and 128 chars, not null or no chars entered
           pwdLength = prompt("Invalid Entry. Please enter a number between 8 and 128.");       // If entry invalid, while loop prompts for re-entry until correct
        }
      
      lowerSelect = prompt("Include lowercase characters? Y/N");                                // Request if lower case required
      lowerBool = convBool(lowerSelect, "Include lowercase?");                                  // Calls function convBool to handle invalid entry, convert y/n string to bool and save in lowerSelect
      
      upperSelect = prompt("Include uppercase characters? Y/N");                                // Request if upper case required
      upperBool = convBool(upperSelect, "Include uppercase?");                                  // Calls function convBool to handle invalid entry, convert y/n string to bool and save in upperSelect

      numericSelect = prompt("Include numeric characters? Y/N");                                // Request if numeric chars required
      numericBool = convBool(numericSelect, "Include numeric?");                                // Calls function convBool to handle invalid entry, convert y/n string to bool and save in numericSelect

      specialSelect = prompt("Include special characters? Y/N")                                 // Request if special chars required
      specialBool = convBool(specialSelect, "Include special chars?");                          // Calls function convBool to handle invalid entry, convert y/n string to bool and save in numericSelect
 }

  // Checks if valid input, returns boolean.
  function convBool(input, whichSelector) {
      while (input.toUpperCase() !== "Y" && input.toUpperCase() !== "N") {                      // Convert string to uppercase and checks if not equal to Y or N
        input = prompt("Invalid entry. " + whichSelector + " Y/N");                             // Prompt for re-entry until correct. Uses whichSelector to inform user (value is string from calling arg)
      }
    return input.toUpperCase() === "Y";                                                         // Convert entry to uppercase and return true if Y or false if N
  }
    
  // Adds booleans, if 0 then no type of char selected
  function checkSelection() {
    boolTotal = lowerBool + upperBool + numericBool + specialBool;                            // Add all boolean selectors and store in boolTotal
    if (boolTotal == 0) {                                                                     // If 0 ie none selected
      window.alert("Please select at least one character type");                              // Prompt user that at least one type is needed
    }                                                                                         // Exit
  }

  // Assemble array for random picker to use, based on selected sets of characters
    function assembleCharArray() {
      charArray.length = 0;
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
      if (boolTotal !== 0) {
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
    } else {
      str = "";
      return str;
    }
  }

     
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


   
  
// Add event listener to generate button
  password = generateBtn.addEventListener("click", writePassword);

  

  
  // var password = writePassword();
  console.log("Final password " + password);


  
  
