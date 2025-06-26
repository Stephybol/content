const baseText = "I am: ";
const extraWords = ["Service Manager", "Project Manager", "Business Intelligence"];
const typingElement = document.querySelector('.typing');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentWord = "";

function typeEffect() {
  currentWord = extraWords[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  const displayedText = baseText + currentWord.substring(0, charIndex);
  typingElement.textContent = displayedText;

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    // Pausa alla fine della parola prima di cancellare
    isDeleting = true;
    typingSpeed = 1500;
  } else if (isDeleting && charIndex === 0) {
    // Passa alla parola successiva
    isDeleting = false;
    wordIndex = (wordIndex + 1) % extraWords.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
