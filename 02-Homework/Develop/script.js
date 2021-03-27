// Assignment Code
let allLower = "abcdefghijklmnopqrstuvwxyz";
let lowerArray = allLower.split('');

let allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upperArray = allUpper.split('');

let allNum = "0123456789";
let numArray = allNum.split('');

let specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let specialArray = specialChar.split('');







function generatePassword() {
  
  let userArray = [];

let confirmUpper;
let confirmLower;
let confirmNum;
let confirmSpecial;
let newElement;
let userLength;

  let password = ""
  function arrayLength() {
    userLength = prompt("Please enter desired length of password between 8 and 128");
    if (userLength < 8 || userLength > 128) {
      alert("Password has to be at least 8 and not more than 128");
      arrayLength();
    }
    return userLength;
    }
    
    arrayLength();
    
    confirmUpper = confirm("Do you want to use Uppercase letters?");
    if (confirmUpper) {
      userArray = userArray.concat(upperArray);
    }
    
    confirmLower = confirm("Do you want to use Lowercase letters?");
    if(confirmLower) {
      userArray = userArray.concat(lowerArray);
    }
    
    confirmNum = confirm("Do you want to use Numbers?");
    if(confirmNum) {
      userArray = userArray.concat(numArray);
    }
    
    confirmSpecial = confirm("Do you want to use Special Characters?");
    if(confirmSpecial) {
      userArray = userArray.concat(specialArray);
    }
 for (i = 0; i < userLength; ++i) {
let pick = userArray[Math.floor(Math.random()*userArray.length)]; // for testing
password += pick
}
  
  return password;



}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//console.log(password); // for testing
//writePassword(upperArray, 15);



// confirmUpper = confirm("Do you want to use Uppercase letters?");
// if (confirmUpper) {
//   for (i = 0; i < upperArray.length; i++) {
//     userArray.push(upperArray[i]);
//   }
// }

// confirmLower = confirm("Do you want to use Lowercase letters?");
// if(confirmLower) {
//   for(i = 0; i < lowerArray.length; ++i) {
//     userArray.push(lowerArray[i]);
//   }
// }

// confirmNum = confirm("Do you want to use Numbers?");
// if(confirmNum) {
//   for(i = 0; i < numArray.length; ++i) {
//     userArray.push(numArray[i]);
//   }
// }

// confirmSpecial = confirm("Do you want to use Special Characters?");
// if(confirmSpecial) {
//   for(i = 0; i < specialArray.length; ++i) {
//     userArray.push(specialArray[i]);
//   }
// }
// //userArray = userArray.concat(upperArray);
// for (i = 0; i < userLength; ++i) {
// let pick = userArray[Math.floor(Math.random()*userArray.length)]; // for testing
// password += pick
//}




//userArray = userArray.concat(numArray);

// console.log(userArray);


//console.log(lettersArray[0]);

//console.log(lettersArray[24]);
//let userInput = prompt("please enter at least 8 and not more than 128 characters", "password");

 //writePassword(userInpu);
// Create alert to inform customer on what to enter and length requirements

// check if customers input is valid before assigning to variable 

// create input for customer and assign to variable

// feed variable into a structure to help randomize inputs 

// then feed randomized input into write password.