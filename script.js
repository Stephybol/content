const text = ["PM", "BI", "Manager"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const typingElement = document.querySelector('.typing');

  if (index >= text.length) index = 0;
  currentText = text[index];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  // Velocità di scrittura/cancellazione
  let typingSpeed = isDeleting ? 120 : 200;

  // Pausa dopo che ha finito di scrivere una parola
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1500); // pausa dopo la parola completa
    return;
  }

  // Passa alla parola successiva
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);
