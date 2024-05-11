export function encrypt(string, shift) {
  if (!string) return string;
  string = string.toString();

  let encrypted = [];
  for (const char of string) {
    if (/[A-Z]/.test(char)) {
      encrypted.push(String.fromCharCode(getShiftedCode(char, shift, 65, 26)));
    } else if (/[a-z]/.test(char)) {
      encrypted.push(String.fromCharCode(getShiftedCode(char, shift, 97, 26)));
    } else encrypted.push(char);
  }
  return encrypted.join("");
}

function getShiftedCode(char, shift, startCode, alphabetSize) {
  const code = char.charCodeAt(0);
  const relativeCode = code - startCode;
  const shiftCode = (relativeCode + shift) % alphabetSize;
  return startCode + (shiftCode >= 0 ? shiftCode : alphabetSize + shiftCode);
}
