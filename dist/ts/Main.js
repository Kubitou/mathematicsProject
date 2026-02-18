import { Operations } from "./operations/Operations.js";
//Class operations object------------------------------------------------------
const operation = new Operations();
//HTML elements----------------------------------------------------------------
const submitButton = document.getElementById("submit");
const radios = document.querySelectorAll('input[name="operation"]');
const pCalculate = document.getElementById("p-calculate");
const min = document.getElementById("min");
const max = document.getElementById("max");
const buttonShowValue = document.querySelector(".show-value");
const pTimer = document.getElementById("p-timer");
//Radio button check-----------------------------------------------------------
let radioValue;
radios.forEach((radio) => {
    radio.addEventListener("change", () => {
        var _a;
        radioValue = (_a = document.querySelector('input[name="operation"]:checked')) === null || _a === void 0 ? void 0 : _a.id;
    });
});
//Click submit button----------------------------------------------------------
let calculate;
submitButton.addEventListener("click", () => {
    if (radioValue == undefined) {
        alert("Selecione pelo menos uma operação para começar");
        return;
    }
    switch (radioValue) {
        case "operation-addition":
            operation.setType("+");
            break;
        case "operation-subtraction":
            operation.setType("-");
            break;
        case "operation-multiplication":
            operation.setType("*");
            break;
        case "operation-division":
            operation.setType("/");
            break;
        default:
            operation.setType("default");
            break;
    }
    if ((min !== null && min.value.trim().length === 0) ||
        (max !== null && max.value.trim().length === 0)) {
        //Call operation function on operator class--------------------------------
        calculate = operation.createOperation();
        pCalculate.textContent = calculate.expression;
    }
    else {
        //Call operation function on operator class with min and max value---------
        calculate = operation.createOperation(parseInt(min.value), parseInt(max.value));
        pCalculate.textContent = calculate.expression;
    }
    submitButton.disabled = true;
    startTimer();
});
buttonShowValue.addEventListener("click", () => {
    submitButton.disabled = false;
    stopTimer();
    pCalculate.textContent = calculate.result.toLocaleString();
});
//StopWatch functions ---------------------------------------------------------
let startTime = 0;
let animationId = null;
function startTimer() {
    startTime = performance.now();
    updateTimer();
}
function updateTimer() {
    const now = performance.now();
    const elapsed = (now - startTime) / 1000;
    pTimer.textContent = elapsed.toFixed(2) + "s";
    animationId = requestAnimationFrame(updateTimer);
}
function stopTimer() {
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}
//# sourceMappingURL=Main.js.map