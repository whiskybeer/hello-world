function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    return document.getElementById("history-value").innerText = num;
}

//function getOutput() {
//    document.getElementById("output-value").innerText = getFormattedtNumber(num);
//}
function getOutput() {
    return document.getElementById("output-value").innerText;
}

function setOutput(value) {
    document.getElementById("output-value").innerText = value;
}

//make output format readable with separators
function getFormattedtNumber(num) {
    if (num === "-") { //check if number is negative
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function printOutput(num) {
    //check if output is empty

    if (num === "") {
        document.getElementById("output-value").innerText = num;
    }
    else {
        document.getElementById("output-value").innerText = getFormattedtNumber(num);
    }
    document.getElementById("output-value").innerText = num;
}

//to revert back to number format for calculations
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}
//mathematical operation defined
var clear = document.getElementById("clear");
clear.addEventListener('click',function () {
    console.log("clears clicked");
    setOutput("0");
});


//number handling defined
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        console.log("numbers clicked");
        var output = reverseNumberFormat(getOutput());
        if (output === 0) {
            printOutput(this.id);
        }
        else if (output !== NaN) { //if output is a number
            printOutput(output + this.id);
        }
    });
}