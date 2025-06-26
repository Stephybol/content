const words = ["Service Manager", "Project Manager", "Business Intelligence"];
const typingElement = document.querySelector('.typing');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const visibleText = currentWord.substring(0, charIndex);

  typingElement.textContent = `I am: ${visibleText}`;

  if (!isDeleting) {
    if (charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 100);
    } else {
      // Pausa prima di cancellare
      isDeleting = true;
      setTimeout(type, 1500);
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      // Passa alla parola successiva
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);
