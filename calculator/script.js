function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    return document.getElementById("history-value").innerText = num;
}

function getOutput() {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
}

//make output format readable with separators
function getFormattedtNumber(num) {
    if (num == "-") { //check if number is negative
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function printOutput(num) {
    //check if output is empty

    if (num == "") {
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
if (this.getElementsByClassName == "clear") {
    var operator = document.getElementsByClassName("operator");
    for (var i = 0; i < operator.lenght; i++) {
        operator[i].addEventListener("click", function () {
            if (this.getElementsByClassName == "clear") {
                printHistory("");
                printOutput("");
            }
            else {
                var output = getOutput();
                var history = getHistory();
                if (output != "") {
                    output = reverseNumberFormat(output);
                    history = history + output;
                }
            }
        })
    }
}
    //number handling defined
    var number = document.getElementsByClassName("number");
    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener('click', function () {
            var output = reverseNumberFormat(getOutput());
            if (output != NaN) { //if output is a number
                output = output + this.id;
                printOutput(output);
            }
        });
    }