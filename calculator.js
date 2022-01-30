const buttons = document.getElementsByClassName("button");
const display = document.getElementById("display");
let numberOne;
let numberTwo;
let currentButton;
let previousButton;
let operatorButton;
let answer;
let remainingSpace;

function rounder(num) {
  typeof(num);
  let i = num.split('.')
  let taken = i[0].length;
  remainingSpace = 9 - taken;
  if (i[1].length < remainingSpace) {
    remainingSpace = i[1].length;
  }
}

function math(first, second, operatorButton) {
  let answer;
  first = parseFloat(first);
  second = parseFloat(second);
  if (operatorButton == "+") {
    answer = first + second;
  } else if (operatorButton == "-") {
    answer = first - second;
  } else if (operatorButton == "/") {
    answer = first / second;
  } else if (operatorButton == "*") {
    answer = first * second;
  }

  if (answer.toString().length > 9 &&
      answer % 1 == 0) {
    answer = "error";
    display.innerText = answer;
  } else if (answer == Infinity) {
    answer = "cut it out";
    display.innerText = answer;
  } else {
    if (answer % 1 != 0) {
      rounder(answer.toString());
      display.innerText = answer.toFixed(remainingSpace);
      numberOne = answer;
      return answer;
    } else {
      display.innerText = answer;
      numberOne = answer;
      return answer;
    }
  }
}

function scrn(currentButton) {
  if (currentButton == "." &&
      display.innerText.includes(".")) {
      return;  
      }

  if (numberOne == undefined &&
      display.innerText.length < 9) {
        if (display.innerText == "" &&
            currentButton == "0") {
            } else {
              display.innerText += currentButton;
            }
    } else if (numberTwo == undefined) {
        display.innerText += currentButton;
      } else {
          display.innerText = "";
          display.innerText += currentButton;
        }
}

function operator(currentButton) {
  if (answer == undefined) {
    if (numberOne == undefined) {
      numberOne = display.innerText;
      display.innerText = "";
      operatorButton = currentButton;
    } else {
      numberTwo = display.innerText;
      math(numberOne, numberTwo, operatorButton);
      operatorButton = currentButton;
    }
  }
}

function calculator() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
      currentButton = buttons[i].dataset.button;
      switch (currentButton) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
          scrn(currentButton);
          break;
        case '+':
          operator(currentButton);
          break;
        case '-':
          operator(currentButton);
          break;
        case '*':
          operator(currentButton);
          break;
        case '/':
          operator(currentButton);
          break;
        case '=':
          numberTwo = parseFloat(display.innerText);
          math(numberOne, numberTwo, operatorButton);
          break;
        case 'clr':
          numberOne = undefined;
          numberTwo = undefined;
          answer = undefined;
          display.innerText = "";
          break;
        case 'neg':
          let turn = parseFloat(display.innerText);
          turn = turn * -1;
          display.innerText = `${turn.toString()}`;
          break;
        case 'prcnt':
          let perc = parseFloat(display.innerText);
          perc = perc / 100;
          display.innerText = `${perc.toString()}`
          break;
      }
    });
  }
}


calculator();