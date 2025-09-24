const input = prompt("Enter several words, separated by commas:");
const words = input.split(",").map((word) => word.trim());

let maxLength = 0;
words.forEach((word) => {
  if (word.length > maxLength) maxLength = word.length;
});

const border = "*".repeat(maxLength + 4);

console.log(border);
words.forEach((word) => {
  const padding = " ".repeat(maxLength - word.length);
  console.log(`* ${word}${padding} *`);
});
console.log(border);
