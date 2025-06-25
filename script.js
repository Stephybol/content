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

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", type);
