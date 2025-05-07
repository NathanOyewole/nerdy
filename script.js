document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.querySelector(".cringe-quote");
  const asciiElement = document.getElementById("ascii-art");
  const input = document.getElementById("fake-input");
  const fill = document.getElementById("meter-fill");
  const popup = document.getElementById("anime-popup");
  const uwuBtn = document.getElementById("uwu-toggle");
  let cringeLevel = 0;

  quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  asciiElement.textContent = `
    ░░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄░░░░░░
    ░░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄░░
    ░░░░█░░░▒▒▒▒▒▒░░░░░░░░░░░░▀▄░
    ░░░█░░░░░░▄▄▄░░░░░▀▄░░░░░░░█░
    ░░░░█░░░░░▀▀▀░░░▄█░░░░░░░░░░█
  `;

  input.addEventListener("input", () => {
    new Audio("assets/sounds/beep.mp3").play();
    cringeLevel = Math.min(cringeLevel + 5, 100);
    fill.style.width = `${cringeLevel}%`;

    if (cringeLevel >= 100) {
      popup.hidden = false;
    }
  });

  uwuBtn.addEventListener("click", () => {
    document.body.classList.toggle("uwu-mode");
  });

  // Matrix rain
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = "01あいさつシステムLOVEHACK";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array.from({ length: columns }, () => 1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(drawMatrix, 33);
});
const quotes = [
  "I tried to sudo my feelings.",
  "404: Motivation not found.",
  "UwU what's this? A runtime error? 🥺",
  "I compile alone at night.",
  "I'm not lonely, I just have too many GitHub repos.",
  "I don't need a therapist, I have Stack Overflow.",
  "I'm so tired, I could sleep in a while loop.",
];

document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.querySelector(".cringe-quote");
  const asciiElement = document.getElementById("ascii-art");

  // Load cringe quote
  quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  // Load fake ASCII art
  asciiElement.textContent = `
  ░░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄░░░░░░░
  ░░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄░░░░
  ░░░░█░░░▒▒▒▒▒▒░░░░░░░░░░░░▀▄░░
  ░░░█░░░░░░▄▄▄░░░░░▀▄░░░░░░░█░
  ░░░░█░░░░░▀▀▀░░░▄█░░░░░░░░░░█
  `;

  // Fake beep
  document.getElementById("fake-input").addEventListener("keypress", () => {
    new Audio("assets/sounds/beep.mp3").play();
  });
});

const confessionForm = document.getElementById("confession-form");
const confessionsList = document.getElementById("confessions-list");

confessionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("cringe-input");
  const confession = input.value.trim();

  if (confession) {
    const li = document.createElement("li");
    li.textContent = `"${confession}"`;
    confessionsList.prepend(li);
    input.value = "";
    new Audio("assets/sounds/typewriter.mp3").play();
  }
});
