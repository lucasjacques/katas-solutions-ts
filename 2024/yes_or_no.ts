export const boolToWord = (bool: boolean): string => {
  return bool ? "Yes": "No";
};
console.log("boolToWord: ", boolToWord(true));

// OBS: another nice solution found
export const boolToWord2 = (bool: boolean): string => bool ? "Yes": "No";

console.log("boolToWord2: ", boolToWord2(true));