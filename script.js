let input = ``;
let inputArr = [];
let currNumber = ``;
let dotOperator = true;
let highPrecedenceOperators = ["x", "/", "%"];
let lowPrecedenceOperators = ["+", "-"];
let historyResult = {
  input: "",
  equal: "=",
  result: "",
};

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const c = document.querySelector(".c");
const backspace = document.querySelector(".backspace");
const divideOperation = document.querySelector(".divide");
const minus = document.querySelector(".minus");
const modulo = document.querySelector(".modulo");
const getOperators = document.querySelector(".operators");
const getPrevEqual = document.querySelector(".prev-equal");
const getPrevResult = document.querySelector(".prev-result");
const addition = document.querySelector(".addition");
const multiplyOperation = document.querySelector(".multiply");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
const display = document.querySelector(".display");

function add(a, b, ...args) {
  let output = a + b;
  if (args) {
    output = args.reduce((acc, item) => acc + item, output);
  }
  return output;
}

function substract(a, b, ...args) {
  let output = a - b;
  if (args) {
    output = args.reduce((acc, item) => acc - item, output);
  }
  return output;
}

function multiply(a, b, ...args) {
  let output = a * b;
  if (args) {
    output = args.reduce((acc, item) => acc * item, output);
  }
  return output;
}

function divide(a, b, ...args) {
  if(b == 0){
    return "ERROR"
  }
  let output = a / b;
  if (args) {
    output = args.reduce((acc, item) => acc / item, output);
  }
  return output;
}

function mod(a, b, ...args) {
  let output = a % b;
  if (args) {
    output = args.reduce((acc, item) => acc % item, output);
  }
  return output;
}

function operate() {
  let output = 0;
  while (inputArr.length > 0) {
    let highIndex = inputArr.findIndex((element) =>
      highPrecedenceOperators.includes(element)
    );
    let lowIndex = inputArr.findIndex((element) =>
      lowPrecedenceOperators.includes(element)
    );
    if (highIndex !== -1) {
      if (inputArr[highIndex] === "x") {
        output = multiply(inputArr[highIndex - 1], inputArr[highIndex + 1]);
      } else if (inputArr[highIndex] === "/") {
        output = divide(inputArr[highIndex - 1], inputArr[highIndex + 1]);
        if(output === "ERROR"){
          inputArr = []
          inputArr.push(output)
        }
      } else {
        output = mod(inputArr[highIndex - 1], inputArr[highIndex + 1]);
      }
      //replace the value before operator to output
      inputArr[highIndex - 1] = output;
      //remove operator and value after operator
      inputArr.splice(highIndex, 1);
      inputArr.splice(highIndex, 1);
    } else if (lowIndex !== -1) {
      if (inputArr[lowIndex] === "+") {
        output = add(inputArr[lowIndex - 1], inputArr[lowIndex + 1]);
      } else {
        output = substract(inputArr[lowIndex - 1], inputArr[lowIndex + 1]);
      }
      //replace the value before operator to output
      inputArr[lowIndex - 1] = output;
      //remove operator and value after operator
      inputArr.splice(lowIndex, 1);
      inputArr.splice(lowIndex, 1);
    } else {
      historyResult.result = inputArr[0];
      input = inputArr[0];
      populateHistory();
      populateDisplay();
      inputArr.pop();
    }
  }
}

function populateHistory() {
  getOperators.textContent = historyResult.input;
  getPrevEqual.textContent = historyResult.equal;
  if (typeof historyResult === "number") {
    getPrevResult.textContent = historyResult.result.toFixed(2);
  } else {
    getPrevResult.textContent = historyResult.result;
  }
}

function populateDisplay() {
  if (typeof input === "number") {
    display.textContent = input.toFixed(2);
  } else {
    display.textContent = input;
  }
}

function inputNumberAssign(number) {
  //check if current previous value is an output
  if ((typeof input === "number" || input === "ERROR") && isNaN(parseFloat(currNumber))) {
    //clear it if it is
    input = "";
  }
  input += number;
  currNumber += number;
}

function inputOperatorAssign(operator, operatorValue){
    if (validation()) {
    input += operator;
    inputArr.push(parseFloat(currNumber));
    inputArr.push(operatorValue);
    dotOperator = true;
    currNumber = "";
    populateDisplay();
  }
}

function inputNumberClear() {
  input = "";
  currNumber = "";
}

function validation() {
  const zeroValiHigh = highPrecedenceOperators.map(op => op.includes(inputArr[(inputArr.length-1)]))
  const zeroValiLow = lowPrecedenceOperators.map(op => op.includes(inputArr[(inputArr.length-1)]))
  let zeroVali = zeroValiHigh || zeroValiLow
  zeroVali = zeroVali.find(op => op===true)
  if (currNumber === "" && !zeroVali) {
    return false;
  }
  return true;
}

function registerInput() {
  zero.addEventListener("click", () => {
    if (validation()) {
      inputNumberAssign("0");
      populateDisplay();
    }
  });

  one.addEventListener("click", () => {
    inputNumberAssign("1");
    populateDisplay();
  });

  two.addEventListener("click", () => {
    inputNumberAssign("2");
    populateDisplay();
  });

  three.addEventListener("click", () => {
    inputNumberAssign("3");
    populateDisplay();
  });

  four.addEventListener("click", () => {
    inputNumberAssign("4");
    populateDisplay();
  });

  five.addEventListener("click", () => {
    inputNumberAssign("5");
    populateDisplay();
  });

  six.addEventListener("click", () => {
    inputNumberAssign("6");
    populateDisplay();
  });

  seven.addEventListener("click", () => {
    inputNumberAssign("7");
    populateDisplay();
  });

  eight.addEventListener("click", () => {
    inputNumberAssign("8");
    populateDisplay();
  });

  nine.addEventListener("click", () => {
    inputNumberAssign("9");
    populateDisplay();
  });

  c.addEventListener("click", () => {
    inputNumberClear();
    populateDisplay();
  });

  backspace.addEventListener("click", () => {
    input = input.slice(0, -1);
    currNumber = currNumber.slice(0, -1);
    populateDisplay();
  });

  divideOperation.addEventListener("click", () => {
    inputOperatorAssign("÷","/")
  });

  minus.addEventListener("click", () => {
    inputOperatorAssign("-","-")
  });

  addition.addEventListener("click", () => {
    inputOperatorAssign("+","+")
  });

  multiplyOperation.addEventListener("click", () => {
    inputOperatorAssign("×","x")
  });

  modulo.addEventListener("click", () => {
    inputOperatorAssign("%","%")
  });

  dot.addEventListener("click", () => {
    if (dotOperator && validation()) {
      inputNumberAssign(".");
      dotOperator = false;
    }
    populateDisplay();
  });

  equal.addEventListener("click", () => {
    //check if input is valid
    //run operation
    if (inputArr.length > 0) {
      inputArr.push(parseFloat(currNumber));
      dotOperator = true;
      historyResult.input = input;
      inputNumberClear();
      operate();
    }
  });
}

registerInput();
populateDisplay();
