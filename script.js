const buttonsSection = document.getElementById("buttons");

let currentAudio = null;

buttonsSection.addEventListener("click", function (e) {

    if (!e.target.classList.contains("btn")) return;

    // STOP BUTTON
    if (e.target.classList.contains("stop")) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        return;
    }

    const soundName = e.target.dataset.sound;

    // Stop previous sound
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
});
