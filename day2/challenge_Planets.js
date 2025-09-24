const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "yellow", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "orange", moons: 79 },
  { name: "Saturn", color: "goldenrod", moons: 82 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 },
];

const section = document.querySelector(".listPlanets");

planets.forEach((planet) => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  // create moons
  for (let i = 0; i < planet.moons; i++) {
    const moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");
    // spread moons around the planet in circle
    const angle = (i / planet.moons) * 2 * Math.PI;
    const radius = 60;
    moonDiv.style.left = `${50 + radius * Math.cos(angle)}px`;
    moonDiv.style.top = `${50 + radius * Math.sin(angle)}px`;
    planetDiv.appendChild(moonDiv);
  }

  section.appendChild(planetDiv);
});
