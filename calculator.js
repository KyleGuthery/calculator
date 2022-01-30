const buttons = document.getElementsByClassName("button");
const display = document.getElementById("display");
let currentButton;
let previousButton;
let operatorButton;

function math(currentButton, previousButton, operatorButton) {
  let answer;
  currentButton = parseFloat(currentButton);
  previousButton = parseFloat(previousButton);

  if (operatorButton == "+") {
    answer = previousButton + currentButton;
  } else if (operatorButton == "-") {
    answer = previousButton - currentButton;
  } else if (operatorButton == "/") {
    answer = previousButton / currentButton;
  } else if (operatorButton == "*") {
    answer = previousButton * currentButton;
  }
    let remainingSpace = answer.length-8;
  display.innerText = answer.toFixed(remainingSpace);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    currentButton = buttons[i].dataset.button;
    if (currentButton == "0" ||
        currentButton == "1" ||
        currentButton == "2" ||
        currentButton == "3" ||
        currentButton == "4" ||
        currentButton == "5" ||
        currentButton == "6" ||
        currentButton == "7" ||
        currentButton == "8" ||
        currentButton == "9") {
      if (display.innerText.length <= 8) {
        display.innerText += currentButton;
      }
    } else if (currentButton == "." && !display.innerText.includes(".")) {
      display.innerText += currentButton;
    } else if (currentButton == "/" ||
               currentButton == "*" ||
               currentButton == "-" ||
               currentButton == "+") {
                previousButton = display.innerText;
                display.innerText = "";
                operatorButton = currentButton;
                currentButton = "";
              } else if (currentButton == "=") {
                currentButton = display.innerText;
                math(currentButton, previousButton, operatorButton)
              } else if (currentButton == "clr") {
                display.innerText = "";
                currentButton = "";
                previousButton = "";
                operatorButton = "";
              }
    // console.log(`cb = ${currentButton}`);
    // console.log(`pb = ${previousButton}`);
    // console.log(`ob = ${operatorButton}`);
  });
}