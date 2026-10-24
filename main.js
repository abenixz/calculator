function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    if (a !== 0 && b === 0) {
        return "Can't divid by zero";
    } else if (a === 0 && b === 0) {
        return "Undefined";
    } else {
        return a / b;
    }
}

let operators = {
    add: 'add',
    subtract: 'subtract',
    multiply: 'multiply',
    divide: 'divide'
};

let operatorIcons = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '÷',
};

let firstNumber = '';
let secondNumber = '';
let operatorChoosen = '';
let result;
let operatorSelected = false;
let isCalculated = false;
let miniDisplayContent = '';
let isError = false;
const MAX_DIGITS = 12;


function operate(operator, inputNum1, inputNum2) {

    if (operator == operators.add) {
        return add(Number(inputNum1), Number(inputNum2));
    } else if (operator == operators.subtract) {
        return subtract(Number(inputNum1), Number(inputNum2));
    } else if (operator == operators.multiply) {
        return multiply(Number(inputNum1), Number(inputNum2));
    } else if (operator == operators.divide) {
        return divide(Number(inputNum1), Number(inputNum2));
    }
};

function formatToDisplay(value) {
    if (!value || value === '-' || isNaN(value)) return value;
    let parts = value.toString().split('.');
    parts[0] = Number(parts[0]).toLocaleString(); // Adds commas to the whole number part
    return parts.join('.'); // Keeps the decimal portion safe (e.g., "1,234.56")
}

function appendToActiveNumber(val) {
    if (isError) return;
    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            firstNumber = '';
        }
        if (firstNumber.length < MAX_DIGITS) {
            firstNumber += val;
            activeDisplay.textContent = formatToDisplay(firstNumber);
        }
    } else {
        if (secondNumber.length < MAX_DIGITS) {
            secondNumber += val;
            activeDisplay.textContent = formatToDisplay(secondNumber);
        }
    }
}



let calcNum0 = document.querySelector(".button-0");
let calcNum1 = document.querySelector(".button-1");
let calcNum2 = document.querySelector(".button-2");
let calcNum3 = document.querySelector(".button-3");
let calcNum4 = document.querySelector(".button-4");
let calcNum5 = document.querySelector(".button-5");
let calcNum6 = document.querySelector(".button-6");
let calcNum7 = document.querySelector(".button-7");
let calcNum8 = document.querySelector(".button-8");
let calcNum9 = document.querySelector(".button-9");
let buttonClear = document.querySelector(".button-clear");
let buttonBackspace = document.querySelector(".button-backspace");
let buttonAdd = document.querySelector(".button-add");
let buttonSubtract = document.querySelector(".button-subtract");
let buttonDivide = document.querySelector(".button-divide");
let buttonMultiply = document.querySelector(".button-multiply");
let buttonPeriod = document.querySelector(".button-period");
let buttonEqual = document.querySelector(".button-equal");


// select the display
let activeDisplay = document.querySelector(".active-display");
let miniDisplay = document.querySelector(".mini-display");


// keyboard Support
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '0':
            appendToActiveNumber('0');
            break;
        case '1':
            appendToActiveNumber('1');
            break;
        case '2':
            appendToActiveNumber('2');
            break;
        case '3':
            appendToActiveNumber('3');
            break;
        case '4':
            appendToActiveNumber('4');
            break;
        case '5':
            appendToActiveNumber('5');
            break;
        case '6':
            appendToActiveNumber('6');
            break;
        case '7':
            appendToActiveNumber('7');
            break;
        case '8':
            appendToActiveNumber('8');
            break;
        case '9':
            appendToActiveNumber('9');
            break;
        case '+':
            if (isError) return;

            if (!(secondNumber == '')) {
                activeDisplay.textContent = '';
                operatorChoosen = operators.add;

                result = operate(operatorChoosen, firstNumber, secondNumber);
                firstNumber = result;
                operatorSelected = true;
                activeDisplay.textContent = formatToDisplay(result);
                miniDisplay.textContent = `${formatToDisplay(firstNumber)}  ${buttonAdd.textContent} `;
                secondNumber = '';
                isCalculated = true;

            } else {
                operatorChoosen = operators.add;
                operatorSelected = true;
                miniDisplay.textContent = "";
                miniDisplay.append(formatToDisplay(firstNumber));
                miniDisplay.append(buttonAdd.textContent);
            }
            break;
        case '-':
            if (isError) return;
            if (!(secondNumber == '')) {
                activeDisplay.textContent = '';
                operatorChoosen = operators.subtract;
                result = operate(operatorChoosen, firstNumber, secondNumber);

                firstNumber = result;
                operatorSelected = true;
                activeDisplay.textContent = formatToDisplay(result);
                miniDisplay.textContent = ` ${formatToDisplay(firstNumber)}  ${buttonSubtract.textContent} `;
                secondNumber = '';
                isCalculated = true;
            } else {
                operatorChoosen = operators.subtract;
                operatorSelected = true;
                miniDisplay.textContent = "";
                miniDisplay.append(formatToDisplay(firstNumber));
                miniDisplay.append(buttonSubtract.textContent);
            }
            break;
        case '*':
            if (isError) return;
            if (!(secondNumber == '')) {
                activeDisplay.textContent = '';
                operatorChoosen = operators.multiply;
                result = operate(operatorChoosen, firstNumber, secondNumber);
                firstNumber = result;
                operatorSelected = true;
                activeDisplay.textContent = formatToDisplay(result);
                miniDisplay.textContent = "";
                miniDisplay.textContent = ` ${formatToDisplay(firstNumber)}  ${buttonMultiply.textContent} `;
                secondNumber = "";
                isCalculated = true;
            } else {
                operatorChoosen = operators.multiply;
                operatorSelected = true;
                miniDisplay.textContent = "";
                miniDisplay.append(formatToDisplay(firstNumber));
                miniDisplay.append(buttonMultiply.textContent);
            }
            break;
        case '/':
            if (isError) return;
            if (!(secondNumber == '')) {
                activeDisplay.textContent = '';
                operatorChoosen = operators.divide;
                result = operate(operatorChoosen, firstNumber, secondNumber);
                firstNumber = result;
                operatorSelected = true;
                activeDisplay.textContent = formatToDisplay(result);
                miniDisplay.textContent = ` ${formatToDisplay(firstNumber)}  ${buttonDivide.textContent} `;
                secondNumber = "";
                isCalculated = true;
            } else {
                operatorChoosen = operators.divide;
                operatorSelected = true;
                miniDisplay.textContent = "";
                miniDisplay.append(formatToDisplay(firstNumber));
                miniDisplay.append(buttonDivide.textContent);
            }
            break;
        case ".":
            if (isError) return;
            if (operatorSelected == false) {
                // first number
                if (isCalculated == true) {
                    // first number for a second calculation is set to the result of the previous oparation
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = formatToDisplay(firstNumber);
                } else {
                    if (firstNumber.includes('.')) {
                        return;
                    } else if (firstNumber === '') {
                        firstNumber = '0';
                        firstNumber += buttonPeriod.textContent;
                        activeDisplay.textContent = formatToDisplay(firstNumber);
                    } else {
                        firstNumber += buttonPeriod.textContent;
                        activeDisplay.textContent = formatToDisplay(firstNumber);
                    }
                }
                // second number
            } else {
                if (secondNumber.includes('.')) {
                    return;
                } else if (secondNumber === '') {
                    secondNumber = '0';
                    secondNumber += buttonPeriod.textContent;
                    activeDisplay.textContent = formatToDisplay(secondNumber);
                } else {
                    secondNumber += buttonPeriod.textContent;
                    activeDisplay.textContent = formatToDisplay(secondNumber);
                }
            };
            break;
        case "Enter":
            e.preventDefault();
            if (isError) return;
            // for second or chain calculations
            if (isCalculated == true) {
                activeDisplay.textContent = '';
                miniDisplay.textContent = '';
                firstNumber = result;
                result = operate(operatorChoosen, firstNumber, secondNumber);
                let operatorIcon = operatorChoosen;
                activeDisplay.textContent = formatToDisplay(result);
                miniDisplay.textContent = `${formatToDisplay(firstNumber)}  ${operatorIcons[operatorIcon]}  ${formatToDisplay(secondNumber)}  ${buttonEqual.textContent}`;

                operatorSelected = true;
                firstNumber = '';
                secondNumber = '';

                // for inital calculations
            } else {
                if (!(firstNumber == '' || secondNumber == '')) {
                    activeDisplay.textContent = '';
                    result = operate(operatorChoosen, firstNumber, secondNumber);
                    if (isNaN(result)) {
                        isError = true;
                        activeDisplay.textContent = formatToDisplay(result);
                        operatorSelected = false;
                        operatorChoosen = '';
                        isCalculated = false;
                        firstNumber = '';
                        secondNumber = '';
                    } else {
                        activeDisplay.textContent = result;
                        miniDisplay.append(formatToDisplay(secondNumber));
                        miniDisplay.append(buttonEqual.textContent);
                        operatorSelected = false;
                        operatorChoosen = '';
                        isCalculated = false;
                        firstNumber = result;
                        secondNumber = '';
                    }
                }
            }
            break;
        case "Backspace":
            if (isError) return;
            if (operatorSelected == false) {
                if (!(firstNumber == '')) {
                    firstNumber = firstNumber.slice(0, -1);
                    activeDisplay.textContent = formatToDisplay(firstNumber);
                }
            } else {
                if (!(secondNumber == '')) {
                    secondNumber = secondNumber.slice(0, -1);
                    activeDisplay.textContent = formatToDisplay(secondNumber);
                }
            }
            break;
        case "Escape":
            activeDisplay.textContent = '';
            miniDisplay.textContent = '';
            firstNumber = '';
            secondNumber = '';
            operatorChoosen = '';
            result = '';
            operatorSelected = false;
            operatorSelected = false;
            isCalculated = false;
            isError = false;
            break;
    }
});

// number buttons
calcNum0.addEventListener('click', function () {
    appendToActiveNumber('0');
});

calcNum1.addEventListener('click', function () {
    appendToActiveNumber('1');
});
calcNum2.addEventListener('click', function () {
    appendToActiveNumber('2');
});
calcNum3.addEventListener('click', function () {
    appendToActiveNumber('3');
});
calcNum4.addEventListener('click', function () {
    appendToActiveNumber('4');
});
calcNum5.addEventListener('click', function () {
    appendToActiveNumber('5');
});
calcNum6.addEventListener('click', function () {
    appendToActiveNumber('6');
});
calcNum7.addEventListener('click', function () {
    appendToActiveNumber('7');
});
calcNum8.addEventListener('click', function () {
    appendToActiveNumber('8');
});
calcNum9.addEventListener('click', function () {
    appendToActiveNumber('8');
});

// operator buttons
buttonClear.addEventListener('click', function () {
    activeDisplay.textContent = '';
    miniDisplay.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operatorChoosen = '';
    result = '';
    operatorSelected = false;
    operatorSelected = false;
    isCalculated = false;
    isError = false;
});
buttonBackspace.addEventListener('click', function () {
    if (isError) return;

    if (operatorSelected == false) {
        if (!(firstNumber == '')) {
            firstNumber = firstNumber.slice(0, -1);
            activeDisplay.textContent = formatToDisplay(firstNumber);
        }
    } else {
        if (!(secondNumber == '')) {
            secondNumber = secondNumber.slice(0, -1);
            activeDisplay.textContent = formatToDisplay(secondNumber);
        }
    }
});
buttonAdd.addEventListener('click', function () {
    if (isError) return;

    if (!(secondNumber == '')) {
        activeDisplay.textContent = '';
        operatorChoosen = operators.add;

        result = operate(operatorChoosen, firstNumber, secondNumber);
        firstNumber = result;
        operatorSelected = true;
        activeDisplay.textContent = formatToDisplay(result);
        miniDisplay.textContent = ` ${formatToDisplay(firstNumber)}  ${buttonAdd.textContent} `;
        secondNumber = '';
        isCalculated = true;

    } else {
        operatorChoosen = operators.add;
        operatorSelected = true;
        miniDisplay.textContent = "";
        miniDisplay.textContent = `${formatToDisplay(firstNumber)}  ${buttonAdd.textContent}`;
    }

});
buttonSubtract.addEventListener('click', function () {
    if (isError) return;
    if (!(secondNumber == '')) {
        activeDisplay.textContent = '';
        operatorChoosen = operators.subtract;
        result = operate(operatorChoosen, firstNumber, secondNumber);

        firstNumber = result;
        operatorSelected = true;
        activeDisplay.textContent = formatToDisplay(firstNumber);
        miniDisplay.textContent = ` ${formatToDisplay(firstNumber)}  ${buttonSubtract.textContent} `;
        secondNumber = '';
        isCalculated = true;
    } else {
        operatorChoosen = operators.subtract;
        operatorSelected = true;
        miniDisplay.textContent = "";
        miniDisplay.textContent = `${formatToDisplay(firstNumber)}  ${buttonSubtract.textContent}`;
    }
});
buttonDivide.addEventListener('click', function () {
    if (isError) return;
    if (!(secondNumber == '')) {
        activeDisplay.textContent = '';
        operatorChoosen = operators.divide;
        result = operate(operatorChoosen, firstNumber, secondNumber);
        firstNumber = result;
        operatorSelected = true;
        activeDisplay.textContent = formatToDisplay(firstNumber);
        miniDisplay.textContent = ` ${formatToDisplay(firstNumber)}  ${buttonDivide.textContent} `;
        secondNumber = "";
        isCalculated = true;
    } else {
        operatorChoosen = operators.divide;
        operatorSelected = true;
        miniDisplay.textContent = "";
        miniDisplay.textContent = `${formatToDisplay(firstNumber)}  ${buttonDivide.textContent}`;
    }
});
buttonMultiply.addEventListener('click', function () {
    if (isError) return;
    if (!(secondNumber == '')) {
        activeDisplay.textContent = '';
        operatorChoosen = operators.multiply;
        result = operate(operatorChoosen, firstNumber, secondNumber);
        firstNumber = result;
        operatorSelected = true;
        activeDisplay.textContent = formatToDisplay(result);
        miniDisplay.textContent = "";
        miniDisplay.textContent = ` ${formatToDisplay(firstNumber)}  ${buttonMultiply.textContent} `;
        secondNumber = "";
        isCalculated = true;
    } else {
        operatorChoosen = operators.multiply;
        operatorSelected = true;
        miniDisplay.textContent = "";
        miniDisplay.textContent = `${formatToDisplay(firstNumber)}  ${buttonMultiply.textContent}`;
    }
});

buttonPeriod.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {
        // first number
        if (isCalculated == true) {
            // first number for a second calculation is set to the result of the previous oparation
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = formatToDisplay(firstNumber);
        } else {
            if (firstNumber.includes('.')) {
                return;
            } else if (firstNumber === '') {
                firstNumber = '0';
                firstNumber += buttonPeriod.textContent;
                activeDisplay.textContent = formatToDisplay(firstNumber);
            } else {
                firstNumber += buttonPeriod.textContent;
                activeDisplay.textContent = formatToDisplay(firstNumber);
            }
        }
        // second number
    } else {
        if (secondNumber.includes('.')) {
            return;
        } else if (secondNumber === '') {
            secondNumber = '0';
            secondNumber += buttonPeriod.textContent;
            activeDisplay.textContent = formatToDisplay(secondNumber);
        } else {
            secondNumber += buttonPeriod.textContent;
            activeDisplay.textContent = formatToDisplay(secondNumber);
        }
    };
});

buttonEqual.addEventListener('click', function () {
    if (isError) return;
    // for second or chain calculations
    if (isCalculated == true) {
        activeDisplay.textContent = '';
        miniDisplay.textContent = '';
        firstNumber = result;
        result = operate(operatorChoosen, firstNumber, secondNumber);
        let operatorIcon = operatorChoosen;
        activeDisplay.textContent = formatToDisplay(result);
        miniDisplay.textContent = ` ${formatToDisplay(firstNumber)}  ${operatorIcons[operatorIcon]}  ${formatToDisplay(secondNumber)}  ${buttonEqual.textContent} `;

        operatorSelected = true;
        firstNumber = '';
        secondNumber = '';

        // for inital calculations
    } else {
        if (!(firstNumber == '' || secondNumber == '')) {
            result = operate(operatorChoosen, firstNumber, secondNumber);
            if (isNaN(result)) {
                isError = true;
                activeDisplay.textContent = formatToDisplay(result);
                operatorSelected = false;
                operatorChoosen = '';
                isCalculated = false;
                firstNumber = '';
                secondNumber = '';

            } else {
                activeDisplay.textContent = formatToDisplay(result);
                miniDisplay.append(` ${formatToDisplay(secondNumber)} `);
                miniDisplay.append(buttonEqual.textContent);
                operatorSelected = false;
                operatorChoosen = '';
                isCalculated = false;
                secondNumber = '';
            }
        }
    }
});
