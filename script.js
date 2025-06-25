const baseText = "I am....";
const extraWords = ["Service Manager", "Project Manager", "Business Intelligence"];
let index = 0;
let fullText = baseText;
const typingElement = document.querySelector('.typing');

document.addEventListener("DOMContentLoaded", () => {
  typingElement.textContent = fullText;
  setTimeout(typeNext, 1000);
});

function typeNext() {
  if (index >= extraWords.length) return;

  const nextWord = ", " + extraWords[index];
  let charIndex = 0;

  function typeChar() {
    if (charIndex < nextWord.length) {
      fullText += nextWord[charIndex];
      typingElement.textContent = fullText;
      charIndex++;
      setTimeout(typeChar, 100);
    } else {
      index++;
      setTimeout(typeNext, 800);
    }
  }

  typeChar();
}
