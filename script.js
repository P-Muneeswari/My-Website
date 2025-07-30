// script.js

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("h1, h2, p, li");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load
});
