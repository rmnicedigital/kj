
// Fade-in effect on cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("fade-in");
    }, index * 100); // delay animation for each card
  });
});
 
// scripts.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// Add to scripts.js
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
};

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// scripts.js
document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;
      z-index: 2000;
    `;
    modal.innerHTML = `<img src="${src}" style="max-width: 80%; max-height: 80%; border-radius: 10px;"><span style="position:absolute;top:10px;right:20px;font-size:30px;color:white;cursor:pointer;">&times;</span>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', () => modal.remove());
  });
});
