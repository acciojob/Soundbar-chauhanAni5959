const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll('#buttons .btn');
const stopBtn = document.querySelector('#buttons .stop');
let audioElements = {};

// Pre-load audio elements
sounds.forEach(sound => {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audioElements[sound] = audio;
});

// Play sound on button click
buttons.forEach((button, idx) => {
  if (!button.classList.contains('stop')) {
    button.addEventListener('click', () => {
      stopAll();
      const sound = sounds[idx];
      audioElements[sound].currentTime = 0;
      audioElements[sound].play();
    });
  }
});

// Stop all sounds
function stopAll() {
  Object.values(audioElements).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

stopBtn.addEventListener('click', stopAll);
