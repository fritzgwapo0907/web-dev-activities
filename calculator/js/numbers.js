function zero() {
    const num = document.getElementById('display1').value;

    if (num !== "0") {
        document.getElementById('display1').value = num + "0";
    }
}

function one() {
    const num = document.getElementById('display1').value;

    if (num === "0") {
        document.getElementById('display1').value = "1";
    } else {
        document.getElementById('display1').value = num + "1";
    }
}

function two() {
    const num = document.getElementById('display1').value;

    if (num === "0") {
        document.getElementById('display1').value = "2";
    } else {
        document.getElementById('display1').value = num + "2";
    }
}

function three() {
    const num = document.getElementById('display1').value;

    if (num === "0") {
        document.getElementById('display1').value = "3";
    } else {
        document.getElementById('display1').value = num + "3";
    }
}

function four() {
    const num = document.getElementById('display1').value;

    if (num === "0") {
        document.getElementById('display1').value = "4";
    } else {
        document.getElementById('display1').value = num + "4";
    }
}

function five() {
    const num = document.getElementById('display1').value;

    if (num === "0") {
        document.getElementById('display1').value = "5";
    } else {
        document.getElementById('display1').value = num + "5";
    }
}

function six() {
    const num = document.getElementById('display1').value;

    if (num === "0") {
        document.getElementById('display1').value = "6";
    } else {
        document.getElementById('display1').value = num + "6";
    }
}

function seven() {
    const num = document.getElementById('display1').value;

    if (num === "0") {
        document.getElementById('display1').value = "7";
    } else {
        document.getElementById('display1').value = num + "7";
    }
}

function eight() {
    const num = document.getElementById('display1').value;

    if (num === "0") {
        document.getElementById('display1').value = "8";
    } else {
        document.getElementById('display1').value = num + "8";
    }
}

function nine() {
    const num = document.getElementById('display1').value;

    if (num === "0") {
        document.getElementById('display1').value = "9";
    } else {
        document.getElementById('display1').value = num + "9";
    }
}

function dot() {
    const num = document.getElementById('display1').value;

    if (!num.includes(".")) {
        document.getElementById('display1').value = num + ".";
    }
}
