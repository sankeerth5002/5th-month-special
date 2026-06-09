const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

    playing = !playing;
});

const startDate = new Date("2026-01-10T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    document.getElementById("days").textContent =
        Math.floor(diff / (1000*60*60*24));

    document.getElementById("hours").textContent =
        Math.floor(diff / (1000*60*60));

    document.getElementById("minutes").textContent =
        Math.floor(diff / (1000*60));

    document.getElementById("seconds").textContent =
        Math.floor(diff / 1000);
}

setInterval(updateCounter, 1000);
updateCounter();

const star = document.getElementById("secretStar");
const modal = document.getElementById("secretModal");

star.addEventListener("click", () => {
    modal.style.display = "flex";
});

function closeSecret(){
    modal.style.display = "none";
}
