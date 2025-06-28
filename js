const audio = document.getElementById('player');
const flipText = document.getElementById('flipText');
const textContainer = document.getElementById('textContainer');
const disco = document.getElementById('discoBall');

audio.addEventListener('play', () => {
  flipText.classList.add('flipped');
  textContainer.classList.add('swap');
  disco.classList.add('active');
});

audio.addEventListener('ended', () => {
  disco.classList.remove('active');
});