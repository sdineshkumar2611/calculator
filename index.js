buttonsEl = document.querySelectorAll("button");

inputFieldEl = document.getElementById("result");

for (i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener(()=>{
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C"){
            clearResult();
        } else if(buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult(){
    inputFieldEl.value = ""
}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue() {
    inputFieldEl.value += buttonValue;
}