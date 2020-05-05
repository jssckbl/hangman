const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
);

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

// game selects random word from words array
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show the hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${
      selectedWord
        .split("") //    need to turn string into an array

        .map(
          letter => `
        <span class = 'letter'>
        ${correctLetters.includes(letter) ? letter : ""} 
        </span>
        `
        ) // map through each letter in the now formed array
        .join("") // turn string back into array
    }`;
}

displayWord();
