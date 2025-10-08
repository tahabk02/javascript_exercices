const gameInfo = [
  { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  { username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
];

// Exercise 1: usernames with "!"
const usernames = [];
gameInfo.forEach((user) => usernames.push(user.username + "!"));
console.log("Exercise 1 - usernames:", usernames);
// ["john!", "becky!", "susy!", "tyson!"]

// Exercise 2: winners with score > 5
const winners = [];
gameInfo.forEach((user) => {
  if (user.score > 5) winners.push(user.username);
});
console.log("Exercise 2 - winners:", winners);
// ["becky", "susy"]

// Exercise 3: total score
const totalScore = gameInfo.reduce((acc, user) => acc + user.score, 0);
console.log("Exercise 3 - total score:", totalScore);
// 71
