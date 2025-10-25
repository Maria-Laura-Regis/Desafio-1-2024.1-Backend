
function removeStr(str) {
  return str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
}



function reverseStr(str) {
  let clearString = removeStr(str);

  return clearString.split("").reverse().join("");
}





function palindrome(str) {
  if (reverseStr(str) === removeStr(str)) {
    return true;
  }
  else {
    return false;
  }

}

palindrome("eye");