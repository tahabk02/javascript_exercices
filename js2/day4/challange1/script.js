const form = document.getElementById("userForm");
const jsonOutput = document.getElementById("jsonOutput");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();

  // Create JSON object
  const userData = {
    name: firstName,
    lastName: lastName,
  };

  // Append JSON to DOM
  jsonOutput.textContent = JSON.stringify(userData, null, 2);

  // Optional: Reset form
  form.reset();
});
