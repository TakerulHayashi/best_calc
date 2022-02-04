const defaultResult = 0;


let currentResult = defaultResult;

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', decrease);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber ) {
    const calcDescr = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescr);
}


function add() {
    const enteredNumber = parseInt(userInput.value);
    const lastResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', lastResult, enteredNumber)
}   

function decrease() {
    const enteredNumber = parseInt(userInput.value);
    const lastResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', lastResult, enteredNumber)
}   


function multiply() {
    const enteredNumber = parseInt(userInput.value);
    const lastResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', lastResult, enteredNumber)
}   
function divide() {
    const enteredNumber = parseInt(userInput.value);
    const lastResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', lastResult, enteredNumber)
}   