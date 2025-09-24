// 🌟 Exercise 1: Timer

const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");

// Part I: alert "Hello World" after 2 seconds
setTimeout(() => {
  alert("Hello World");
}, 2000);

// Part II: add a new paragraph after 2 seconds
setTimeout(() => {
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}, 2000);

// Part III: add a paragraph every 2 seconds with setInterval
let intervalId = setInterval(() => {
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);

  // stop interval after 5 paragraphs
  if (container.children.length >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

// clear interval when user clicks the button
clearBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});

// 🌟 Exercise 2: Move the box

function myMove() {
  const animate = document.getElementById("animate");
  const container = document.getElementById("container");

  let pos = 0;
  const containerWidth = container.clientWidth;
  const boxWidth = animate.clientWidth;

  const id = setInterval(frame, 1); // move 1px per millisecond

  function frame() {
    if (pos >= containerWidth - boxWidth) {
      clearInterval(id);
    } else {
      pos++;
      animate.style.left = pos + "px";
    }
  }
}
