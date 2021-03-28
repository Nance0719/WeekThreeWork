
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
    if(userLength === "") {
      exit();
    }
    else if (userLength < 8 || userLength > 128) {
      alert("Password has to be at least 8 and not more than 128");
      arrayLength();
    }
    else {
      return userLength;
    }
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
    let pick = userArray[Math.floor(Math.random()*userArray.length)];
    password += pick
  }
  return password;

}

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}


generateBtn.addEventListener("click", writePassword);

