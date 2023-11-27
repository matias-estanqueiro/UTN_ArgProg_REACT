const operando1 = document.getElementById("num1__input");
const operando2 = document.getElementById("num2__input");

const oper_suma = document.getElementById("oper_suma");
const oper_resta = document.getElementById("oper_resta");
const oper_multiplicacion = document.getElementById("oper_multiplicacion");
const oper_division = document.getElementById("oper_division");

const resultado = document.getElementById("result__operacion");

function calculadora(operando1, operando2, operacion) {
    if (operando1 == "" || operando2 == "") {
        alert("Por favor, rellene todos los campos");
    } else {
        const parsedOperando2 = parseFloat(operando2);
        const parsedOperando1 = parseFloat(operando1);
        switch (operacion) {
            case "suma":
                resultado.innerHTML = (parsedOperando1 + parsedOperando2).toFixed(2);
                break;
            case "resta":
                resultado.innerHTML = (parsedOperando1 - parsedOperando2).toFixed(2);
                break;
            case "multiplicacion":
                resultado.innerHTML = (parsedOperando1 * parsedOperando2).toFixed(2);
                break;
            case "division":
                resultado.innerHTML = (parsedOperando1 / parsedOperando2).toFixed(2);
                break;
        }
    }
}

oper_suma.addEventListener("click", () => {
    calculadora(operando1.value, operando2.value, "suma");
});

oper_resta.addEventListener("click", () => {
    calculadora(operando1.value, operando2.value, "resta");
});

oper_multiplicacion.addEventListener("click", () => {
    calculadora(operando1.value, operando2.value, "multiplicacion");
});

oper_division.addEventListener("click", () => {
    calculadora(operando1.value, operando2.value, "division");
});
