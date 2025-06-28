const audio = document.getElementById('player');
const flipText = document.getElementById('flipText');
const chaos = document.getElementById('chaos');
const symbols = ['🚬'];

function createSymbol() {
  const el = document.createElement('div');
  el.className = 'symbol';
  el.textContent = symbols[0];
  el.style.left = Math.random() * window.innerWidth + 'px';
  el.style.top = Math.random() * window.innerHeight + 'px';
  el.style.animationDuration = (1 + Math.random() * 2) + 's';
  chaos.appendChild(el);
  setTimeout(() => el.remove(), 5000);
}

audio.addEventListener('play', () => {
  flipText.classList.add('flipped');
  document.getElementById('textContainer').classList.add('swap');

  for (let i = 0; i < 25; i++) {
    setTimeout(createSymbol, i * 100);
  }
});