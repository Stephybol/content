const words = ["Developer", "Project Manager", "BI Analyst", "UX Designer"];
const typingElement = document.querySelector(".typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayed = currentWord.substring(0, charIndex);
  typingElement.textContent = displayed;

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    delay = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 500;
  }

  charIndex += isDeleting ? -1 : 1;
  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);
