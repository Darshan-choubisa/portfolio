const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const card4 = document.getElementById("card-4");

const Aboutme = document.getElementById("aboutme-link");
const Summary = document.getElementById("summary-link");
const Port = document.getElementById("portfolio-link");
const Contact = document.getElementById("contact-link");

function showOnly(section) {
  card1.classList.add("hidden");
  card2.classList.add("hidden");
  card3.classList.add("hidden");
  card4.classList.add("hidden");

  section.classList.remove("hidden");
}

// Aboutme.addEventListener("click", (e) => {
//   e.preventDefault();
//   showOnly(card1);
// });

// Summary.addEventListener("click", (e) => {
//   e.preventDefault();
//   showOnly(card2);
// });
// Port.addEventListener("click", (e) => {
//   e.preventDefault();
//   showOnly(card3);
// });
// Contact.addEventListener("click", (e) => {
//   e.preventDefault();
//   showOnly(card4);
// });


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
// const toggleBtn = document.getElementById("toggleBtn");
// const detailsBox = document.getElementById("detailsBox");

// toggleBtn.addEventListener("click", () => {
//   detailsBox.classList.toggle("hidden");
//   toggleBtn.textContent = detailsBox.classList.contains("hidden")
//     ? "More"
//     : "Less";
// });
;


const toggleBtn2 = document.getElementById("toggleBtn2");
const detailsBox = document.getElementById("detailsBox");
const maincontainer = document.getElementById("main-container")

toggleBtn2.addEventListener("click", () => {
  const isHidden = detailsBox.classList.contains("max-h-0");

  if (isHidden) {
    detailsBox.classList.remove("max-h-0", "opacity-0");
    detailsBox.classList.add("max-h-[500px]", "opacity-100");
    detailsBox.style.margintop = "8px"
    maincontainer.style.marginTop = "8px"
    toggleBtn2.textContent = "Less";
  } else {
    detailsBox.classList.add("max-h-0", "opacity-0");
    detailsBox.classList.remove("max-h-[500px]", "opacity-100");
    toggleBtn2.textContent = "More";
  }
});



// window.addEventListener("load", () => {
//   detailsBox.classList.remove("hidden");
// })



// sidebar-menu 
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");


menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("translate-x-0");
});





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
// const sidebar = document.getElementById("sidebar");

// // let menuOpen = false;

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






