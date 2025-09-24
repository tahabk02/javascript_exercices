const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

const stories = [
  (noun, adj, person, verb, place) =>
    `${person} saw a ${adj} ${noun} while trying to ${verb} at ${place}.`,
  (noun, adj, person, verb, place) =>
    `One day, ${person} decided to ${verb} a ${adj} ${noun} in ${place}.`,
  (noun, adj, person, verb, place) =>
    `${person} never imagined that a ${adj} ${noun} would ${verb} at ${place}.`,
  (noun, adj, person, verb, place) =>
    `At ${place}, ${person} found a ${adj} ${noun} and started to ${verb}.`,
];

function generateStory() {
  const noun = document.getElementById("noun").value.trim();
  const adj = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adj || !person || !verb || !place) {
    alert("Please fill in all the fields!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * stories.length);
  const story = stories[randomIndex](noun, adj, person, verb, place);

  storySpan.textContent = story;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  generateStory();
});

const shuffleButton = document.createElement("button");
shuffleButton.textContent = "Shuffle Story";
shuffleButton.type = "button";
form.appendChild(shuffleButton);

shuffleButton.addEventListener("click", generateStory);
