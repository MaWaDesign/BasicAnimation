window.onload= function (){
    const on_off_switch = document.querySelector("#myswitch");
    on_off_switch.addEventListener("click", changeSrc);




let walk = document.querySelector("#walk");

function changeSrc() {
    console.log("function to change image.src");
    if (walk.getAttribute('src') == "placeholder-01.svg") {
        walk.src = "placeholder-02.svg";
        on_off_switch.textContent="Turn it off!";
        on_off_switch.style.backgroundColor = "#ff0000";
        document.getElementById('effect1').play();
    } else {
        walk.src = "placeholder-01.svg";
        on_off_switch.textContent="Turn the animation on";
        on_off_switch.style.backgroundColor = "#e7e7e7";
        document.getElementById('effect1').pause();
        document.getElementById('effect1').currentTime = 0;
    }
}
}
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

//ANIMATION 3

function play3() {
    var element = document.getElementById("animation3");
    element.classList.remove("animation3");
    void element.offsetWidth;
    element.classList.add("animation3");
    document.getElementById("animation3").style.animationPlayState = "running";
    var element = document.getElementById("effect3");
    element.classList.remove("effect3");
    void element.offsetWidth;
    element.classList.add("effect3");
    document.getElementById('effect3').currentTime = 0;
    document.getElementById('effect3').play();
    document.getElementById("start3").style.backgroundColor = "#ff0000";
}

function pause3() {
    document.getElementById("animation3").style.animationPlayState = "paused";
    document.getElementById('effect3').pause();
    document.getElementById("start3").style.backgroundColor = "#e7e7e7";
}

function resume3() {
    document.getElementById("animation3").style.animationPlayState = "running";
    document.getElementById('effect3').play();
    document.getElementById("start3").style.backgroundColor = "#ff0000"
}


function restart3() {
    var element = document.getElementById("animation3");
    element.classList.remove("animation3");
    void element.offsetWidth;
    element.classList.add("animation3");
    document.getElementById("start3").style.backgroundColor = "#e7e7e7";
    document.getElementById("animation3").style.animationPlayState = "paused";
    document.getElementById('effect3').pause();
    document.getElementById('effect3').currentTime = 0;
}

//ANIMATION 4

function play4() {
    var element = document.getElementById("animation4");
    element.classList.remove("animation4");
    void element.offsetWidth;
    element.classList.add("animation4");
    document.getElementById("animation4").style.animationPlayState = "running";
    var element = document.getElementById("effect4");
    element.classList.remove("effect4");
    void element.offsetWidth;
    element.classList.add("effect4");
    document.getElementById('effect4').currentTime = 0;
    document.getElementById('effect4').play();
    document.getElementById("start4").style.backgroundColor = "#ff0000";
}

function pause4() {
    document.getElementById("animation4").style.animationPlayState = "paused";
    document.getElementById('effect4').pause();
    document.getElementById("start4").style.backgroundColor = "#e7e7e7";
}

function resume4() {
    document.getElementById("animation4").style.animationPlayState = "running";
    document.getElementById('effect4').play();
    document.getElementById("start4").style.backgroundColor = "#ff0000"
}


function restart4() {
    var element = document.getElementById("animation4");
    element.classList.remove("animation4");
    void element.offsetWidth;
    element.classList.add("animation4");
    document.getElementById("start4").style.backgroundColor = "#e7e7e7";
    document.getElementById("animation4").style.animationPlayState = "paused";
    document.getElementById('effect4').pause();
    document.getElementById('effect4').currentTime = 0;
}

//ANIMATION 5

function play5() {
    var element = document.getElementById("animation5");
    element.classList.remove("animation5");
    void element.offsetWidth;
    element.classList.add("animation5");
    document.getElementById("animation5").style.animationPlayState = "running";
    var element = document.getElementById("effect5");
    element.classList.remove("effect5");
    void element.offsetWidth;
    element.classList.add("effect5");
    document.getElementById('effect5').currentTime = 0;
    document.getElementById('effect5').play();
    document.getElementById("start5").style.backgroundColor = "#ff0000";
}

function pause5() {
    document.getElementById("animation5").style.animationPlayState = "paused";
    document.getElementById('effect5').pause();
    document.getElementById("start5").style.backgroundColor = "#e7e7e7";
}

function resume5() {
    document.getElementById("animation5").style.animationPlayState = "running";
    document.getElementById('effect5').play();
    document.getElementById("start5").style.backgroundColor = "#ff0000"
}


function restart5() {
    var element = document.getElementById("animation5");
    element.classList.remove("animation5");
    void element.offsetWidth;
    element.classList.add("animation5");
    document.getElementById("start5").style.backgroundColor = "#e7e7e7";
    document.getElementById("animation5").style.animationPlayState = "paused";
    document.getElementById('effect5').pause();
    document.getElementById('effect5').currentTime = 0;
}

//ANIMATION 6

function play6() {
    var element = document.getElementById("animation6");
    element.classList.remove("animation6");
    void element.offsetWidth;
    element.classList.add("animation6");
    document.getElementById("animation6").style.animationPlayState = "running";
    var element = document.getElementById("effect6");
    element.classList.remove("effect6");
    void element.offsetWidth;
    element.classList.add("effect6");
    document.getElementById('effect6').currentTime = 0;
    document.getElementById('effect6').play();
    document.getElementById("start6").style.backgroundColor = "#ff0000";
}

function pause6() {
    document.getElementById("animation6").style.animationPlayState = "paused";
    document.getElementById('effect6').pause();
    document.getElementById("start6").style.backgroundColor = "#e7e7e7";
}

function resume6() {
    document.getElementById("animation6").style.animationPlayState = "running";
    document.getElementById('effect6').play();
    document.getElementById("start6").style.backgroundColor = "#ff0000"
}


function restart6() {
    var element = document.getElementById("animation6");
    element.classList.remove("animation6");
    void element.offsetWidth;
    element.classList.add("animation6");
    document.getElementById("start6").style.backgroundColor = "#e7e7e7";
    document.getElementById("animation6").style.animationPlayState = "paused";
    document.getElementById('effect6').pause();
    document.getElementById('effect6').currentTime = 0;
}

//ANIMATION 7

function play7() {
    var element = document.getElementById("animation7");
    element.classList.remove("animation7");
    void element.offsetWidth;
    element.classList.add("animation7");
    document.getElementById("animation7").style.animationPlayState = "running";
    var element = document.getElementById("effect7");
    element.classList.remove("effect7");
    void element.offsetWidth;
    element.classList.add("effect7");
    document.getElementById('effect7').currentTime = 0;
    document.getElementById('effect7').play();
    document.getElementById("start7").style.backgroundColor = "#ff0000";
}

function pause7() {
    document.getElementById("animation7").style.animationPlayState = "paused";
    document.getElementById('effect7').pause();
    document.getElementById("start7").style.backgroundColor = "#e7e7e7";
}

function resume7() {
    document.getElementById("animation7").style.animationPlayState = "running";
    document.getElementById('effect7').play();
    document.getElementById("start7").style.backgroundColor = "#ff0000"
}


function restart7() {
    var element = document.getElementById("animation7");
    element.classList.remove("animation7");
    void element.offsetWidth;
    element.classList.add("animation7");
    document.getElementById("start7").style.backgroundColor = "#e7e7e7";
    document.getElementById("animation7").style.animationPlayState = "paused";
    document.getElementById('effect7').pause();
    document.getElementById('effect7').currentTime = 0;
}


//ANIMATION 8

function play8() {
    var element = document.getElementById("animation8");
    element.classList.remove("animation8");
    void element.offsetWidth;
    element.classList.add("animation8");
    document.getElementById("animation8").style.animationPlayState = "running";
    var element = document.getElementById("effect8");
    element.classList.remove("effect8");
    void element.offsetWidth;
    element.classList.add("effect8");
    document.getElementById('effect8').currentTime = 0;
    document.getElementById('effect8').play();
    document.getElementById("start8").style.backgroundColor = "#ff0000";
}

function pause8() {
    document.getElementById("animation8").style.animationPlayState = "paused";
    document.getElementById('effect8').pause();
    document.getElementById("start8").style.backgroundColor = "#e8e8e8";
}

function resume8() {
    document.getElementById("animation8").style.animationPlayState = "running";
    document.getElementById('effect8').play();
    document.getElementById("start8").style.backgroundColor = "#ff0000"
}

function restart8() {
    var element = document.getElementById("animation8");
    element.classList.remove("animation8");
    void element.offsetWidth;
    element.classList.add("animation8");
    document.getElementById("start8").style.backgroundColor = "#e8e8e8";
    document.getElementById("animation8").style.animationPlayState = "paused";
    document.getElementById('effect8').pause();
    document.getElementById('effect8').currentTime = 0;
}

//ANIMATION 9

function play9() {
    var element = document.getElementById("animation9");
    element.classList.remove("animation9");
    void element.offsetWidth;
    element.classList.add("animation9");
    document.getElementById("animation9").style.animationPlayState = "running";
    var element = document.getElementById("effect9");
    element.classList.remove("effect9");
    void element.offsetWidth;
    element.classList.add("effect9");
    document.getElementById('effect9').currentTime = 0;
    document.getElementById('effect9').play();
    document.getElementById("start9").style.backgroundColor = "#ff0000";
}

function pause9() {
    document.getElementById("animation9").style.animationPlayState = "paused";
    document.getElementById('effect9').pause();
    document.getElementById("start9").style.backgroundColor = "#e9e9e9";
}

function resume9() {
    document.getElementById("animation9").style.animationPlayState = "running";
    document.getElementById('effect9').play();
    document.getElementById("start9").style.backgroundColor = "#ff0000"
}

function restart9() {
    var element = document.getElementById("animation9");
    element.classList.remove("animation9");
    void element.offsetWidth;
    element.classList.add("animation9");
    document.getElementById("start9").style.backgroundColor = "#e9e9e9";
    document.getElementById("animation9").style.animationPlayState = "paused";
    document.getElementById('effect9').pause();
    document.getElementById('effect9').currentTime = 0;
}
