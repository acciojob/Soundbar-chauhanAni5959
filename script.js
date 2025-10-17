const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
let currentAudio = null;

function removeAudio() {
  const aud = document.querySelector("audio");
  if (aud) {
    aud.pause();
    aud.currentTime = 0;
    aud.remove();
  }
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const soundName = btn.textContent.trim();
    if (soundName === 'stop') {
      removeAudio();
      return;
    }
    removeAudio();
    const audio = document.createElement("audio");
    audio.src = `sounds/${soundName}.mp3`;
    audio.autoplay = true;
    audio.setAttribute("controls", "");
    document.body.appendChild(audio);
    currentAudio = audio;
  });
});
