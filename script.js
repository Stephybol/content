const words = ["Developer", "Project Manager", "BI Analyst", "UX Designer"];
const typingElement = document.querySelector(".typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayed = currentWord.substring(0, charIndex);
  typingElement.textContent = displayed;

  if (isDeleting) {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pausa a fine parola
      return;
    }
  }

  const delay = isDeleting ? 50 : 100;
  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);
