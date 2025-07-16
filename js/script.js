// Dark mode toggle
const toggleButton = document.getElementById("toggle-theme");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

// Modal logic for certifications
const certModal = document.getElementById("certModal");
const certImage = document.getElementById("certImage");
const closeBtn = document.querySelector(".close");

const certImages = {
  admin: "assets/cert-admin.png",
  appbuilder: "assets/cert-appbuilder.png",
  dev1: "assets/cert-dev1.png",
  service: "assets/cert-service.png",
  data: "assets/cert-data.png",
  omni: "assets/cert-omni.png",
  mcdev: "assets/cert-mcdev.png",
  mcemail: "assets/cert-mcemail.png",
  pardot: "assets/cert-pardot.png"
};

document.querySelectorAll(".cert-badges span").forEach(badge => {
  badge.addEventListener("click", () => {
    const certKey = badge.dataset.cert;
    certImage.src = certImages[certKey] || "assets/cert-placeholder.png";
    certModal.style.display = "block";
  });
});

function closeModal() {
  certModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == certModal) {
    certModal.style.display = "none";
  }
};

// Hamburger toggle logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
