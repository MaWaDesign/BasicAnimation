function myPlayFunction1() {
    document.getElementById("animation1").style.animationPlayState = "running";
    document.getElementById('effect1').play()
}



function myPauseFunction1() {
    document.getElementById("animation1").style.animationPlayState = "paused";
    document.getElementById('effect1').pause()
}

function changeColor1() {
    document.getElementById("start1").style.backgroundColor = "#ff0000";
}

function changeColorpause1() {
    document.getElementById("start1").style.backgroundColor = "#e7e7e7";
}


function restart1() {
    var element = document.getElementById("animation1");
    element.classList.remove("animation1");
    void element.offsetWidth;
    element.classList.add("animation1");
    document.getElementById("start1").style.backgroundColor = "#e7e7e7";
    document.getElementById("animation1").style.animationPlayState = "paused";
    document.getElementById('effect1').pause();
    document.getElementById('effect1').currentTime = 0;
}

//function playaudio() {
//    document.getElementById('effect').play()
//}

//function pauseaudio() {
//    document.getElementById('effect').pause()()
//}
