const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const card4 = document.getElementById("card-4");

const Aboutme = document.getElementById("aboutme");
const Summary = document.getElementById("summary");
const Port = document.getElementById("port");
const Contact = document.getElementById("contact");

function showOnly(section) {
  card1.classList.add("hidden");
  card2.classList.add("hidden");
  card3.classList.add("hidden");
  card4.classList.add("hidden");

  section.classList.remove("hidden");
}

Aboutme.addEventListener("click", (e) => {
  e.preventDefault();
  showOnly(card1);
});
Summary.addEventListener("click", (e) => {
  e.preventDefault();
  showOnly(card2);
});
Port.addEventListener("click", (e) => {
  e.preventDefault();
  showOnly(card3);
});
Contact.addEventListener("click", (e) => {
  e.preventDefault();
  showOnly(card4);
});

const toggleBtn = document.getElementById("toggleBtn");
    const detailsBox = document.getElementById("detailsBox");

    toggleBtn.addEventListener("click", () => {
      detailsBox.classList.toggle("hidden");
      toggleBtn.textContent = detailsBox.classList.contains("hidden")
        ? "More"
        : "Less";
    });

// // By default show About section
// main1.classList.remove("hidden");
// main2.classList.add("hidden");
// main3.classList.add("hidden");
// main4.classList.add("hidden");

// // About me
// Aboutme.addEventListener("click", () => {
//     main1.classList.remove("hidden");
//     main2.classList.add("hidden");
//     main3.classList.add("hidden");
//     main4.classList.add("hidden");
// });

// // Summary
// Summary.addEventListener("click", () => {
//     main1.classList.add("hidden");
//     main2.classList.remove("hidden");
//     main3.classList.add("hidden");
//     main4.classList.add("hidden");
// });

// // Portfolio
// Port.addEventListener("click", () => {
//     main1.classList.add("hidden");
//     main2.classList.add("hidden");
//     main3.classList.remove("hidden");
//     main4.classList.add("hidden");
// });

// // Contact
// Contact.addEventListener("click", () => {
//     main1.classList.add("hidden");
//     main2.classList.add("hidden");
//     main3.classList.add("hidden");
//     main4.classList.remove("hidden");
// });


// const sections = {
//     aboutme: document.getElementById("main-1"),
//     summary: document.getElementById("main-2"),
//     port: document.getElementById("main-3"),
//     contact: document.getElementById("main-4")
// };

// function showSection(activeId) {
//     for (const id in sections) {
//         if (id === activeId) {
//             sections[id].classList.remove("hidden");
//         } else {
//             sections[id].classList.add("hidden");
//         }
//     }
// }

// document.getElementById("aboutme").addEventListener("click", () => showSection("aboutme"));
// document.getElementById("summary").addEventListener("click", () => showSection("summary"));
// document.getElementById("port").addEventListener("click", () => showSection("port"));
// document.getElementById("contact").addEventListener("click", () => showSection("contact"));

// // Show "aboutme" by default
// showSection("aboutme");

// console.log(aboutme);
// console.log(summary);
// console.log(port);
// console.log(contact);



// const menuToggle = document.getElementById("menuToggle");
// const sidebar = document.getElementById("aboutme-desktop");
// const contentWrapper = document.getElementById("contentWrapper");

// let menuOpen = false;

// menuToggle.addEventListener("click", () => {
//   menuOpen = !menuOpen;

//   if (menuOpen) {
//     // OPEN: bring sidebar in
//     sidebar.classList.remove("-translate-x-full");
//     sidebar.classList.add("translate-x-0");
//     contentWrapper.classList.add("ml-64");
//   } else {
//     // CLOSE: push sidebar out
//     sidebar.classList.remove("translate-x-0");
//     sidebar.classList.add("-translate-x-full");
//     contentWrapper.classList.remove("ml-64");
//   }
// });



