//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btn = document.querySelector(`.btn:nth-child(${sounds.indexOf(sound) + 1})`);

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    window.currentSound = audio; // Save reference to current sound
  });
});

document.querySelector('.stop').addEventListener('click', () => {
  stopSounds();
});

function stopSounds() {
  if (window.currentSound) {
    window.currentSound.pause();
    window.currentSound.currentTime = 0;
  }
}
