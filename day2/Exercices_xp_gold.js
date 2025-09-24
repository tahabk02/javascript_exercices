// Exercise 1: is_Blank
function isBlank(str) {
  return str === "";
}
console.log(isBlank("")); // true
console.log(isBlank("abc")); // false

// Exercise 2: Abbrev_name
function abbrevName(name) {
  const parts = name.split(" ");
  return parts[0] + " " + parts[1][0] + ".";
}
console.log(abbrevName("Robin Singh")); // "Robin S."

// Exercise 3: SwapCase
function swapCase(str) {
  let result = "";
  for (let char of str) {
    if (char === char.toUpperCase()) result += char.toLowerCase();
    else result += char.toUpperCase();
  }
  return result;
}
console.log(swapCase("The Quick Brown Fox")); // "tHE qUICK bROWN fOX"

// Exercise 4: Omnipresent value
function isOmnipresent(arr, val) {
  return arr.every((sub) => sub.includes(val));
}
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
); // true
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
); // false

// Exercise 5: Red table diagonal
let table = document.body.querySelector("table");
for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}
