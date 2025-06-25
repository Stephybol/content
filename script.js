const words = ["PM", "BI", "Manager"];
let index = 0;
let fullSentence = "";
let typingElement;

document.addEventListener("DOMContentLoaded", () => {
  typingElement = document.querySelector('.typing');
  typeNext();
});

function typeNext() {
  if (index >= words.length) return;

  const nextWord = (index > 0 ? ", " : "") + words[index];
  let charIndex = 0;

  const typeChar = () => {
    if (charIndex < nextWord.length) {
      fullSentence += nextWord[charIndex];
      typingElement.textContent = fullSentence;
      charIndex++;
      setTimeout(typeChar, 100);
    } else {
      index++;
      setTimeout(typeNext, 800);
    }
  };

  typeChar();
}
