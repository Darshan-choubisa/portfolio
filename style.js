const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const card4 = document.getElementById("card-4");

function showOnly(section) {
  card1.classList.add("hidden");
  card2.classList.add("hidden");
  card3.classList.add("hidden");
  card4.classList.add("hidden");

  section.classList.remove("hidden");
}


document.querySelectorAll(".aboutme-link").forEach(Aboutme => {
  Aboutme.addEventListener("click", (e) => {
    e.preventDefault();
    showOnly(card1);
  });
})

document.querySelectorAll(".summary-link").forEach(Summary => {
  Summary.addEventListener("click", (e) => {
    e.preventDefault();
    showOnly(card2);
  });
})

document.querySelectorAll(".portfolio-link").forEach(Port => {
  Port.addEventListener("click", (e) => {
    e.preventDefault();
    showOnly(card3);
  });
})
document.querySelectorAll(".contact-link").forEach(Contact => {
  Contact.addEventListener("click", (e) => {
    e.preventDefault();
    showOnly(card4);
  });
})

// hidden box 
const toggleBtn = document.getElementById("toggleBtn");
const detailsBox = document.getElementById("detailsBox");

toggleBtn.addEventListener("click", () => {
  detailsBox.classList.toggle("hidden");
  toggleBtn.textContent = detailsBox.classList.contains("hidden")
    ? "More"
    : "Less";
});



