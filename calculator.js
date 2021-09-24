var display = document.getElementById("calulate");
var button = document.getElementsByClassName("numkey");
var operand1 = 0;
var operand2 = null;
var operator = null;
for (var index = 0; index < button.length; index++) {
  button[index].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "+") {
      operator = "+";
      operand1 = parseFloat(display.textContent);
      //   display.innerText=operand1+1;
      display.innerText = "";
    } else if (value == "AC") {
      operator = null;
      operand1 = 0;
      //   display.innerText=operand1+1;
      display.innerText = "";
    } else if (value == "-") {
      operator = "-";
      operand1 = parseFloat(display.textContent);
      //   display.innerText=operand1+1;
      display.innerText = "";
    } else if (value == "*") {
      operator = "*";
      operand1 = parseFloat(display.textContent);
      //   display.innerText=operand1+1;
      display.innerText = "";
    } else if (value == "/") {
      operator = "/";
      operand1 = parseFloat(display.textContent);
      //   display.innerText=operand1+1;
      display.innerText = "";
    } else if (value == "%") {
      operator = "%";
      operand1 = parseFloat(display.textContent);
      //   display.innerText=operand1+1;
      display.innerText = "";
    } else if (value == "=") {
      // display.innerText="";

      operand2 = parseFloat(display.textContent);

      var result = eval(operand1 + " " + operator + " " + operand2);

      display.innerText = result;
    } else {
      display.innerText += value;
    }
  });
}
