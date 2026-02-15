const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let currentInput = "";      // Lo que ve el usuario
let internalInput = "";     // Lo que calcula JS

buttons.addEventListener("click", (e) => {

    const target = e.target;

    if (!target.matches("button")) return;

    const value = target.dataset.value;
    const action = target.dataset.action;

    if (value) {

        // Mostrar símbolos bonitos pero guardar operadores reales
        if (value === "*") {
            currentInput += "×";
            internalInput += "*";
        }
        else if (value === "/") {
            currentInput += "÷";
            internalInput += "/";
        }
        else {
            currentInput += value;
            internalInput += value;
        }

        display.value = currentInput;
    }

    if (action === "clear") {
        currentInput = "";
        internalInput = "";
        display.value = "";
    }

    if (action === "calculate") {
        try {
            const result = eval(internalInput);
            currentInput = result.toString();
            internalInput = result.toString();
            display.value = currentInput;
        } catch {
            display.value = "Error";
            currentInput = "";
            internalInput = "";
        }
    }

});
