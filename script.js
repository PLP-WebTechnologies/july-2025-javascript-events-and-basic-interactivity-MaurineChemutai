// Theme Toggle
// Theme Toggle
document.getElementById("modeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// Steps Tracker
let steps = 0;
document.getElementById("incBtn").addEventListener("click", () => {
  document.getElementById("count").textContent = ++steps;
});

// Health Check-In Form Validation
document.getElementById("myForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const symptoms = document.getElementById("symptoms").value.trim();
  const msg = document.getElementById("msg");

  if (name.length < 3) msg.textContent = "⚠️ Please enter a valid full name.";
  else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) msg.textContent = "⚠️ Invalid email address.";
  else if (symptoms.length < 2) msg.textContent = "⚠️ Please enter your symptoms.";
  else msg.textContent = "✅ Health check-in submitted. Thank you!";
});

// FAQ Toggle
document.querySelectorAll(".faqBtn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const ans = document.querySelectorAll(".faqAns")[i];
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});
