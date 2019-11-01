//ANIMATION 1

function play1() {
    var element = document.getElementById("animation1");
    element.classList.remove("animation1");
    void element.offsetWidth;
    element.classList.add("animation1");
    document.getElementById("animation1").style.animationPlayState = "running";
    var element = document.getElementById("effect1");
    element.classList.remove("effect1");
    void element.offsetWidth;
    element.classList.add("effect1");
    document.getElementById('effect1').currentTime = 0;
    document.getElementById('effect1').play();
    document.getElementById("start1").style.backgroundColor = "#ff0000";
}

function pause1() {
    document.getElementById("animation1").style.animationPlayState = "paused";
    document.getElementById('effect1').pause();
    document.getElementById("start1").style.backgroundColor = "#e7e7e7";
}

function resume1() {
    document.getElementById("animation1").style.animationPlayState = "running";
    document.getElementById('effect1').play();
    document.getElementById("start1").style.backgroundColor = "#ff0000"
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
//ANIMATION 2

function play2() {
    var element = document.getElementById("animation2");
    element.classList.remove("animation2");
    void element.offsetWidth;
    element.classList.add("animation2");
    document.getElementById("animation2").style.animationPlayState = "running";
    var element = document.getElementById("effect2");
    element.classList.remove("effect2");
    void element.offsetWidth;
    element.classList.add("effect2");
    document.getElementById('effect2').currentTime = 0;
    document.getElementById('effect2').play();
    document.getElementById("start2").style.backgroundColor = "#ff0000";
}

function pause2() {
    document.getElementById("animation2").style.animationPlayState = "paused";
    document.getElementById('effect2').pause();
    document.getElementById("start2").style.backgroundColor = "#e7e7e7";
}

function resume2() {
    document.getElementById("animation2").style.animationPlayState = "running";
    document.getElementById('effect2').play();
    document.getElementById("start2").style.backgroundColor = "#ff0000"
}


function restart2() {
    var element = document.getElementById("animation2");
    element.classList.remove("animation2");
    void element.offsetWidth;
    element.classList.add("animation2");
    document.getElementById("start2").style.backgroundColor = "#e7e7e7";
    document.getElementById("animation2").style.animationPlayState = "paused";
    document.getElementById('effect2').pause();
    document.getElementById('effect2').currentTime = 0;
}
