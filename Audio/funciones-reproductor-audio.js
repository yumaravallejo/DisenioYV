var audio = document.getElementById('audio');
var btnPlay = document.getElementById('btnPlay');
var reproducir = document.getElementById('reproducir');
var parar = document.getElementById('parar');
var restart = document.getElementById('restart');
var volumeDown = document.getElementById('volume-down');
var volumeUp = document.getElementById('volume-up');
var isPaused = false;


reproducir.onclick = function (ev) {
    if (!isPaused) {
        audio.play();
        btnPlay.classList.remove("fa-play");
        btnPlay.classList.add("fa-pause");
    } else {
        audio.pause();
        btnPlay.classList.remove("fa-pause");
        btnPlay.classList.add("fa-play");
    }
    isPaused = !isPaused;
};

parar.onclick = function (ev) {
    audio.pause();
    audio.currentTime = 0;
    btnPlay.classList.remove("fa-pause");
    btnPlay.classList.add("fa-play");
    isPaused = false;
};

restart.onclick = function (ev) {
    audio.currentTime = 0;
    audio.play();
    btnPlay.classList.remove("fa-play");
    btnPlay.classList.add("fa-pause");
    isPaused = true;
};

volumeDown.onclick = function (ev) {
    if (audio.volume > 0.1)
        audio.volume -= 0.1;
};

volumeUp.onclick = function (ev) {
    if (audio.volume < 1)
        audio.volume += 0.1;
};