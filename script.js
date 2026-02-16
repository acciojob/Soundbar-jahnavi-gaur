const buttonsSection = document.getElementById("buttons");
const audio = document.getElementById("audio");

buttonsSection.addEventListener("click", function (e) {

    if (!e.target.classList.contains("btn")) return;

    if (e.target.classList.contains("stop")) {
        audio.pause();
        audio.currentTime = 0;
        return;
    }

    const soundName = e.target.dataset.sound;

    audio.src = `sounds/${soundName}.mp3`;
    audio.play();
});
