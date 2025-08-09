const output = document.querySelector(".output");
let outputScreen = [];

document.addEventListener("click", (e) => {
  if (!e.target.matches(".calc-btn")) return;
  const currentBtn = e.target.textContent;
  if (currentBtn === "C") {
    outputScreen = [];
    output.textContent = "";
  }
  addNumberToOutput(currentBtn, "1");
  addNumberToOutput(currentBtn, "2");
  addNumberToOutput(currentBtn, "3");
  addNumberToOutput(currentBtn, "4");
  addNumberToOutput(currentBtn, "5");
  addNumberToOutput(currentBtn, "6");
  addNumberToOutput(currentBtn, "7");
  addNumberToOutput(currentBtn, "8");
  addNumberToOutput(currentBtn, "9");
  addNumberToOutput(currentBtn, ".");
  addNumberToOutput(currentBtn, "+");
  addNumberToOutput(currentBtn, "-");
  addNumberToOutput(currentBtn, "*");
  addNumberToOutput(currentBtn, "/");
  if (outputScreen.length > 0) {
    const noCommaOutputScreen = outputScreen.join("");
    output.textContent = noCommaOutputScreen;
    if (currentBtn === "=") {
      const finalCalc = calculate(noCommaOutputScreen);
      output.textContent = finalCalc;
      outputScreen = [finalCalc];
    }
  }
});

function addNumberToOutput(currentBtn, number) {
  if (currentBtn === number) {
    outputScreen.push(number);
  }
}

function calculate(noCommaOutputScreen) {
  const calculation = eval(noCommaOutputScreen.toString());
  return calculation;
}
