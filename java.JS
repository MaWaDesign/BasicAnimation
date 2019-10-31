var date = new Date()

document.body.innerHTML = "<h1> The date today is " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "</h1>";


function animation1() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}

function animation2() {
    var elem = document.getElementById("animate2");
    var pos = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
