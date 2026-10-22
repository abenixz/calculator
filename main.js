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
    if (a !== 0 && b == 0) {
        return "Can't divid by zero";
    } else if (a == 0 && b == 0) {
        return "Undefined";
    } else {
        a / b;
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
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum0.textContent;
                    activeDisplay.textContent = firstNumber;
                }
            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum0.textContent;
                activeDisplay.append(secondNumber);
            }
            break;
        case '1':
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum1.textContent;
                    activeDisplay.textContent = firstNumber;
                }
            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum1.textContent;
                activeDisplay.append(secondNumber);
            }
            break;
        case '2':
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum2.textContent;
                    activeDisplay.textContent = firstNumber;
                }
            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum2.textContent;
                activeDisplay.append(secondNumber);
            }
            break;

        case '3':
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum3.textContent;
                    activeDisplay.textContent = firstNumber;
                }

            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum3.textContent;
            }
            break;
        case '4':
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum4.textContent;
                    activeDisplay.textContent = firstNumber;
                }
            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum4.textContent;
                activeDisplay.append(secondNumber);
            }
            break;
        case '5':
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum5.textContent;
                    activeDisplay.textContent = firstNumber;
                }
            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum5.textContent;
                activeDisplay.append(secondNumber);
            }
            break;
        case '6':
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum6.textContent;
                    activeDisplay.textContent = firstNumber;
                }
            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum6.textContent;
                activeDisplay.append(secondNumber);
            }
            break;
        case '7':
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum7.textContent;
                    activeDisplay.textContent = firstNumber;
                }
            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum7.textContent;
                activeDisplay.append(secondNumber);
            }
            break;
        case '8':
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum8.textContent;
                    activeDisplay.textContent = firstNumber;
                }

            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum8.textContent;
                activeDisplay.append(secondNumber);
            }
            break;
        case '9':
            if (isError) return;
            if (operatorSelected == false) {
                if (isCalculated == true) {
                    isCalculated = false;
                    activeDisplay.textContent = '';
                    firstNumber = result;
                    activeDisplay.textContent = firstNumber;
                } else {
                    firstNumber += calcNum9.textContent;
                    activeDisplay.textContent = firstNumber;
                }

            } else {
                activeDisplay.textContent = '';
                secondNumber += calcNum9.textContent;
                activeDisplay.append(secondNumber);
            }
            break;

        case '+':
            if (isError) return;

            if (!(secondNumber == '')) {
                activeDisplay.textContent = '';
                operatorChoosen = operators.add;

                result = operate(operatorChoosen, firstNumber, secondNumber);
                firstNumber = result;
                operatorSelected = true;
                activeDisplay.textContent = result;
                miniDisplay.textContent = ` ${firstNumber} ${buttonAdd.textContent} `;
                secondNumber = '';
                isCalculated = true;

            } else {
                operatorChoosen = operators.add;
                operatorSelected = true;
                miniDisplay.textContent = "";
                miniDisplay.append(firstNumber);
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
                activeDisplay.textContent = result;
                miniDisplay.textContent = ` ${firstNumber} ${buttonSubtract.textContent} `;
                secondNumber = '';
                isCalculated = true;
            } else {
                operatorChoosen = operators.subtract;
                operatorSelected = true;
                miniDisplay.textContent = "";
                miniDisplay.append(firstNumber);
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
                activeDisplay.textContent = result;
                miniDisplay.textContent = "";
                miniDisplay.textContent = ` ${firstNumber} ${buttonMultiply.textContent} `;
                secondNumber = "";
                isCalculated = true;
            } else {
                operatorChoosen = operators.multiply;
                operatorSelected = true;
                miniDisplay.textContent = "";
                miniDisplay.append(firstNumber);
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
                activeDisplay.textContent = result;
                miniDisplay.textContent = ` ${firstNumber} ${buttonDivide.textContent} `;
                secondNumber = "";
                isCalculated = true;
            } else {
                operatorChoosen = operators.divide;
                operatorSelected = true;
                miniDisplay.textContent = "";
                miniDisplay.append(firstNumber);
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
                    activeDisplay.textContent = firstNumber;
                } else {
                    if (firstNumber.includes('.')) {
                        return;
                    } else if (firstNumber === '') {
                        firstNumber = '0';
                        firstNumber += buttonPeriod.textContent;
                        activeDisplay.textContent = firstNumber;
                    } else {
                        firstNumber += buttonPeriod.textContent;
                        activeDisplay.textContent = firstNumber;
                    }
                }
                // second number
            } else {
                if (secondNumber.includes('.')) {
                    return;
                } else if (secondNumber === '') {
                    secondNumber = '0';
                    secondNumber += buttonPeriod.textContent;
                    activeDisplay.textContent = secondNumber;
                } else {
                    secondNumber += buttonPeriod.textContent;
                    activeDisplay.textContent = secondNumber;
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
                activeDisplay.textContent = result;
                miniDisplay.textContent = `${firstNumber} ${operatorIcons[operatorIcon]} ${secondNumber} ${buttonEqual.textContent}`;

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
                        activeDisplay.textContent = result;
                        operatorSelected = false;
                        operatorChoosen = '';
                        isCalculated = false;
                        firstNumber = '';
                        secondNumber = '';
                    } else {
                        activeDisplay.textContent = result;
                        miniDisplay.append(secondNumber);
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
                    activeDisplay.textContent = firstNumber;
                }
            } else {
                if (!(secondNumber == '')) {
                    secondNumber = secondNumber.slice(0, -1);
                    activeDisplay.textContent = secondNumber;
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
    if (isError) return;

    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;

        } else {
            firstNumber += calcNum0.textContent;
            activeDisplay.textContent = firstNumber;
        }

    } else {
        activeDisplay.textContent = '';
        secondNumber += calcNum0.textContent;
        activeDisplay.append(secondNumber);
    }
});

calcNum1.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {

        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;

        } else {
            if (firstNumber.length < MAX_DIGITS) {
                firstNumber += calcNum1.textContent;
                activeDisplay.textContent = firstNumber;
            }
        }

    } else {
        
        activeDisplay.textContent = '';
        secondNumber += calcNum1.textContent;
        activeDisplay.append(secondNumber);
    }
});
calcNum2.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;
        } else {
            firstNumber += calcNum2.textContent;
            activeDisplay.textContent = firstNumber;
        }
    } else {
        activeDisplay.textContent = '';
        secondNumber += calcNum2.textContent;
        activeDisplay.append(secondNumber);
    }
});
calcNum3.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;
        } else {
            firstNumber += calcNum3.textContent;
            activeDisplay.textContent = firstNumber;
        }

    } else {
        activeDisplay.textContent = '';
        secondNumber += calcNum3.textContent;
        activeDisplay.append(secondNumber);
    }
});
calcNum4.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;
        } else {
            firstNumber += calcNum4.textContent;
            activeDisplay.textContent = firstNumber;
        }

    } else {
        activeDisplay.textContent = '';
        secondNumber += calcNum4.textContent;
        activeDisplay.append(secondNumber);
    }
});
calcNum5.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;
        } else {
            firstNumber += calcNum5.textContent;
            activeDisplay.textContent = firstNumber;
        }

    } else {
        activeDisplay.textContent = '';
        secondNumber += calcNum5.textContent;
        activeDisplay.append(secondNumber);
    }
});
calcNum6.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;
        } else {
            firstNumber += calcNum6.textContent;
            activeDisplay.textContent = firstNumber;
        }

    } else {
        activeDisplay.textContent = '';
        secondNumber += calcNum6.textContent;
        activeDisplay.append(secondNumber);
    }
});
calcNum7.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;
        } else {
            firstNumber += calcNum7.textContent;
            activeDisplay.textContent = firstNumber;
        }

    } else {
        activeDisplay.textContent = '';
        secondNumber += calcNum7.textContent;
        activeDisplay.append(secondNumber);
    }
});
calcNum8.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;
        } else {
            firstNumber += calcNum8.textContent;
            activeDisplay.textContent = firstNumber;
        }

    } else {
        activeDisplay.textContent = '';
        secondNumber += calcNum8.textContent;
        activeDisplay.append(secondNumber);
    }
});
calcNum9.addEventListener('click', function () {
    if (isError) return;
    if (operatorSelected == false) {
        if (isCalculated == true) {
            isCalculated = false;
            activeDisplay.textContent = '';
            firstNumber = result;
            activeDisplay.textContent = firstNumber;
        } else {
            firstNumber += calcNum9.textContent;
            activeDisplay.textContent = firstNumber;
        }

    } else {
        activeDisplay.textContent = '';
        secondNumber += calcNum9.textContent;
        activeDisplay.append(secondNumber);
    }
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
            activeDisplay.textContent = firstNumber;
        }

    } else {
        if (!(secondNumber == '')) {
            secondNumber = secondNumber.slice(0, -1);
            activeDisplay.textContent = secondNumber;
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
        activeDisplay.textContent = result;
        miniDisplay.textContent = ` ${firstNumber} ${buttonAdd.textContent} `;
        secondNumber = '';
        isCalculated = true;

    } else {
        operatorChoosen = operators.add;
        operatorSelected = true;
        miniDisplay.textContent = "";
        miniDisplay.append(firstNumber);
        miniDisplay.append(buttonAdd.textContent);
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
        activeDisplay.textContent = result;
        miniDisplay.textContent = ` ${firstNumber} ${buttonSubtract.textContent} `;
        secondNumber = '';
        isCalculated = true;
    } else {
        operatorChoosen = operators.subtract;
        operatorSelected = true;
        miniDisplay.textContent = "";
        miniDisplay.append(firstNumber);
        miniDisplay.append(buttonSubtract.textContent);
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
        activeDisplay.textContent = result;
        miniDisplay.textContent = ` ${firstNumber} ${buttonDivide.textContent} `;
        secondNumber = "";
        isCalculated = true;
    } else {
        operatorChoosen = operators.divide;
        operatorSelected = true;
        miniDisplay.textContent = "";
        miniDisplay.append(firstNumber);
        miniDisplay.append(buttonDivide.textContent);
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
        activeDisplay.textContent = result;
        miniDisplay.textContent = "";
        miniDisplay.textContent = ` ${firstNumber} ${buttonMultiply.textContent} `;
        secondNumber = "";
        isCalculated = true;
    } else {
        operatorChoosen = operators.multiply;
        operatorSelected = true;
        miniDisplay.textContent = "";
        miniDisplay.append(firstNumber);
        miniDisplay.append(buttonMultiply.textContent);
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
            activeDisplay.textContent = firstNumber;
        } else {
            if (firstNumber.includes('.')) {
                return;
            } else if (firstNumber === '') {
                firstNumber = '0';
                firstNumber += buttonPeriod.textContent;
                activeDisplay.textContent = firstNumber;
            } else {
                firstNumber += buttonPeriod.textContent;
                activeDisplay.textContent = firstNumber;
            }
        }
        // second number
    } else {
        if (secondNumber.includes('.')) {
            return;
        } else if (secondNumber === '') {
            secondNumber = '0';
            secondNumber += buttonPeriod.textContent;
            activeDisplay.textContent = secondNumber;
        } else {
            secondNumber += buttonPeriod.textContent;
            activeDisplay.textContent = secondNumber;
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
        activeDisplay.textContent = result;
        miniDisplay.textContent = `${firstNumber} ${operatorIcons[operatorIcon]} ${secondNumber} ${buttonEqual.textContent}`;

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
                activeDisplay.textContent = result;
                operatorSelected = false;
                operatorChoosen = '';
                isCalculated = false;
                firstNumber = '';
                secondNumber = '';


            } else {
                activeDisplay.textContent = result;
                miniDisplay.append(secondNumber);
                miniDisplay.append(buttonEqual.textContent);
                operatorSelected = false;
                operatorChoosen = '';
                isCalculated = false;
                firstNumber = result;
                secondNumber = '';

            }
        }
    }
});

//  [x] fix: when equal is clicked twice after an initial calculation 
//  [x] fix (chain calculations) : when equal is clicked after a chain calc, for example 1 + 1 + 2  then = equal should calculate with what it have and append to the display



// add: a comma spearator for bigger numbers on the activeDisplay and on the mini display as well
// [x} add: keyboard support

