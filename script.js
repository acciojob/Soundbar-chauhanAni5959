const soundNames = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelectorAll('#buttons .btn:not(.stop)');
const stopBtn = document.querySelector('.stop');

// Play sound when a button is clicked
buttons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    stopAllSounds();
    const soundName = soundNames[idx];
    const audio = document.getElementById(soundName);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
});

// Stop all sounds
function stopAllSounds() {
  soundNames.forEach(name => {
    const audio = document.getElementById(name);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

stopBtn.addEventListener('click', stopAllSounds);
