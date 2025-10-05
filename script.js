const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll('.btn');
const audioContainer = document.createElement('div');
audioContainer.id = 'audio-container';
document.body.appendChild(audioContainer);

buttons.forEach((btn, index) => {
  if (!btn.classList.contains('stop')) {
    btn.addEventListener('click', () => {
      stopSounds();
      const soundName = sounds[index];
      const audio = document.createElement('audio');
      audio.src = `sounds/${soundName}.mp3`;
      audio.setAttribute('controls', ''); // Optional: makes it visible
      audio.setAttribute('autoplay', 'true');
      audioContainer.appendChild(audio);
      audio.play();
      window.currentAudio = audio;
    });
  }
});

document.querySelector('.stop').addEventListener('click', () => {
  stopSounds();
});

function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
    window.currentAudio.remove(); // Clean up
  }
}
