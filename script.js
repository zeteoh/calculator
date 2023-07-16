let input = ``;
let inputArr = [];
let currNumber = ``;
let dotOperator = true;

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
  let output = a * b;
  if (args) {
    output = args.reduce((acc, item) => acc * item, output);
  }
  return output;
}

function opearte(){
    //split the input by operators
    let arr = input.split("")
}

function populateDisplay(){
    display.textContent = input
}

function inputNumberAssign(number){
    input += number
    currNumber += number
}

function inputNumberClear(){
    input += ""
    currNumber += ""
}


function registerInput() {
  zero.addEventListener("click", () => {
    inputNumberAssign('0')
    populateDisplay();
    console.log("hi")
  });

  one.addEventListener("click", () => {
    inputNumberAssign('1')
    populateDisplay();
  });

  two.addEventListener("click", () => {
    inputNumberAssign('2')
    populateDisplay();
  });

  three.addEventListener("click", () => {
    inputNumberAssign('3')
    populateDisplay();
  });

  four.addEventListener("click", () => {
    inputNumberAssign('4')
    populateDisplay();
  });

  five.addEventListener("click", () => {
    inputNumberAssign('5')
    populateDisplay();
  });

  six.addEventListener("click", () => {
    inputNumberAssign('6')
    populateDisplay();
  });

  seven.addEventListener("click", () => {
    inputNumberAssign('7')
    populateDisplay();
  });

  eight.addEventListener("click", () => {
    inputNumberAssign('8')
    populateDisplay();
  });

  nine.addEventListener("click", () => {
    inputNumberAssign('9')
    populateDisplay();
  });

  c.addEventListener("click", () => {
    inputNumberClear();
    populateDisplay();
  });

  backspace.addEventListener("click", () => {
    input = input.slice(0,-1)
    currNumber = currNumber.slice(0,-1);
    populateDisplay();
  });

  divideOperation.addEventListener("click", () => {
    input += "÷"
    inputArr.push(parseFloat(currNumber))
    inputArr.push("/")
    dotOperator = true
    currNumber = ""
    populateDisplay();
  });

  minus.addEventListener("click", () => {
    input += "-"
    inputArr.push(parseFloat(currNumber))
    inputArr.push("-")
    dotOperator = true
    currNumber = ""
    populateDisplay();
  });

  addition.addEventListener("click", () => {
    input += "+"
    inputArr.push(parseFloat(currNumber))
    inputArr.push("+")
    dotOperator = true
    currNumber = ""
    populateDisplay();
  });

  multiplyOperation.addEventListener("click", () => {
    input += "×"
    inputArr.push(parseFloat(currNumber))
    inputArr.push("x")
    dotOperator = true
    currNumber = ""
    populateDisplay();
  })

  dot.addEventListener("click", () => {
    if(dotOperator){
        inputNumberAssign('.')
        dotOperator = false
    }
    populateDisplay();
  });

  equal.addEventListener("click", () => {
    //run operation
    //check if input is valid
  });
}

function operate(a, b, ...args) {
  //populate the display when user clicks
  //call any of the operations
  //update display
}

registerInput();
populateDisplay();