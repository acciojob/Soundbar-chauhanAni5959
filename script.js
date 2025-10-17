const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
let currentAudio = null;

// Add event listeners to each button
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const soundName = btn.textContent.trim();
    if (soundName === 'stop') {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }
    playSound(soundName);
  });
});

function playSound(name) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(`sounds/${name}.mp3`);
  currentAudio.play();
}
