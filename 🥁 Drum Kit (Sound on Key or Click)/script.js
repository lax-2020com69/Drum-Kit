const sounds = {
  A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  D: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  F: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  G: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  H: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  J: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  K: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  L: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
};

function playSound(key) {
  const audioSrc = sounds[key];
  if (!audioSrc) return;

  const audio = new Audio(audioSrc);
  audio.currentTime = 0; // allow fast repeat pressing
  audio.play();

  const button = document.querySelector(`button[data-key="${key}"]`);
  if (button) {
	button.classList.add('active');
	setTimeout(() => button.classList.remove('active'), 100);
  }
}

document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  if (sounds[key]) {
	playSound(key);
  }
});

document.querySelectorAll('.drum-pad').forEach(button => {
  button.addEventListener('click', () => {
	playSound(button.getAttribute('data-key'));
  });
});

document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  if (sounds[key]) {
	playSound(key);
  }
});
