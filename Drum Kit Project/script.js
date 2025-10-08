function playSound(e) {
  const keyCode = e.keyCode || this.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0; // Restart sound
  audio.play();

  key.classList.add("playing");
  setTimeout(() => key.classList.remove("playing"), 150);
}

// Keyboard press
window.addEventListener("keydown", playSound);

// Mouse click
document.querySelectorAll(".key").forEach((btn) => {
  btn.addEventListener("click", playSound);
});
