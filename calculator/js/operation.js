function plus() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "0") {
        answer = Number(display2) + Number(display1);
        document.getElementById('display2').value = answer;
        document.getElementById('display1').value = "0";
    }

    else {
        document.getElementById('display1').value = "0";
        document.getElementById('display2').value = display1;
    }

    document.getElementById('operator').value = "+";
}

function minus() {
        const display1 = document.getElementById('display1').value;
        const display2 = document.getElementById('display2').value;
        const operator = document.getElementById('operator').value;
    
        if (display2 !== "0") {
        answer = Number(display2) - Number(display1);
        document.getElementById('display2').value = answer;
        document.getElementById('display1').value = "0";
        }
    
        else {
            document.getElementById('display1').value = "0";
            document.getElementById('display2').value = display1;
        }
    
        document.getElementById('operator').value = "-";
    }
function multiply() {
        const display1 = document.getElementById('display1').value;
        const display2 = document.getElementById('display2').value;
        const operator = document.getElementById('operator').value;
    
        if (display2 !== "0") {
            answer = Number(display2) * Number(display1);
            document.getElementById('display2').value = answer;
            document.getElementById('display1').value = "0";
        }
    
        else {
            document.getElementById('display1').value = "0";
            document.getElementById('display2').value = display1;
        }
    
        document.getElementById('operator').value = "*";
    }

function divide() {
    const display1 = document.getElementById('display1').value;
        const display2 = document.getElementById('display2').value;
        const operator = document.getElementById('operator').value;
    
        if (display2 !== "0") {
            answer = Number(display2) / Number(display1);
            document.getElementById('display2').value = answer;
            document.getElementById('display1').value = "0";
        }
    
        else {
            document.getElementById('display1').value = "0";
            document.getElementById('display2').value = display1;
        }
    
        document.getElementById('operator').value = "/";
    }
function equal() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operation = document.getElementById('operation').value;

    let answer;
    if (operation == "+"){
        answer= Number(display1) + Number(display2);
    }
    if (operation == "-"){
        answer= Number(display1) - Number(display2);
    }
    if (operation == "*"){
        answer= Number(display1) * Number(display2);
    }
    if (operation == "/"){
        answer= Number(display1) / Number(display2);
    }

    document.getElementById('display1').value = answer;
    document.getElementById('display2').value = "";
    document.getElementById('operation').value = "";

}