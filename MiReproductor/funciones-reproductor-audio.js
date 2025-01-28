var audio = document.getElementById('audio'),
    btnPlay = document.getElementById('btnPlay'),
    reproducir = document.getElementById('reproducir'),
    parar = document.getElementById('parar'),
    restart = document.getElementById('restart'),
    volumeDown = document.getElementById('volume-down'),
    volumeUp = document.getElementById('volume-up'),
    icon = document.getElementById('iconVolumen'),
    range = document.getElementById("barraVolumen"),
    slideValue = document.getElementById("valorVolumen")
    isPaused = false;


//Mi función de barra de audio
range.addEventListener("input", () => {
    let rangeVal = range.value;
    slideValue.innerHTML = rangeVal;

    //El audio solo tiene 0 y 1 de volumen así que se parte entre 100 el valor
    audio.volume = barraVolumen.value / 100;

    if (rangeVal > 0) {
        icon.classList.replace("uil-volume-mute", "uil-volume-down")
    } else {
        icon.classList.replace("uil-volume-down", "uil-volume-mute")
    }

    if (rangeVal > 30) {
        icon.classList.replace("uil-volume-down", "uil-volume")
    } else {
        icon.classList.replace("uil-volume", "uil-volume-down")
    }

    if (rangeVal > 80) {
        icon.classList.replace("uil-volume", "uil-volume-up")
    } else {
        icon.classList.replace("uil-volume-up", "uil-volume")
    }
});

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

//Estos no los he usado pero también era sencillo
volumeDown.onclick = function (ev) {
    if (audio.volume > 0.1)
        audio.volume -= 0.1;
};

volumeUp.onclick = function (ev) {
    if (audio.volume < 1)
        audio.volume += 0.1;
};