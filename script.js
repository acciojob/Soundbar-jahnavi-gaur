//your JS code here. If required.
let buttons = document.querySelector('#buttons')
let currentAudio = null

buttons.forEach((button)=>{
	button.addEventListener('click',handlePlay)
})

function handlePlay(e){
	if (e.target.classList.contains('stop')) {
    if (currentAudio) {
      currentAudio.pause()
      currentAudio.currentTime = 0
    }
    return
  }

  const sound = e.target.dataset.sound

  if (currentAudio) {
    currentAudio.pause()
  }

  currentAudio = new Audio(sound)
  currentAudio.play()
}