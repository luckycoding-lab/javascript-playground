let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

let updateProgressInterval;

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (ctrlIcon.classList.contains("bi-pause-fill")) {
        song.pause();
        ctrlIcon.classList.remove("bi-pause-fill");
        ctrlIcon.classList.add("bi-play-fill");
        clearInterval(updateProgressInterval); // Stop updating the progress bar
    } else {
        song.play();
        ctrlIcon.classList.remove("bi-play-fill");
        ctrlIcon.classList.add("bi-pause-fill");

        // Only set the interval once when the song starts playing
        updateProgressInterval = setInterval(() => {
            progress.value = song.currentTime;
        }, 100);
    }
}

progress.onchange = function () {
    song.currentTime = progress.value; // Update song position based on progress bar
};

// Optional: Clear the interval when the song ends
song.onended = function () {
    ctrlIcon.classList.remove("bi-pause-fill");
    ctrlIcon.classList.add("bi-play-fill");
    clearInterval(updateProgressInterval); // Stop the progress update when the song ends
};
