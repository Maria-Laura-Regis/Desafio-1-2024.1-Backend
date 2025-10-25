function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decodedString = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charIndex = alphabet.indexOf(char);

    if (charIndex === -1) {
  
      decodedString += char;
    } else if (charIndex < 13) {
     
      decodedString += alphabet[charIndex + 13];
    } else {
     
      decodedString += alphabet[charIndex - 13];
    }
  }
  return decodedString;
}

rot13("SERR PBQR PNZC");