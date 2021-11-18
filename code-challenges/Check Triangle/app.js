var firstSide = document.getElementById("firstside");
var secondSide = document.getElementById("secondside");
var thirdSide = document.getElementById("thirdside");
var button = document.getElementById("btn");
var display = document.getElementById("display");


class Calculator{}

Calculator.prototype.check = () => {
  let firstValue = parseInt(firstSide.value);
  let secondValue = parseInt(secondSide.value);
  let thirdValue = parseInt(thirdSide.value);
  if (firstValue <= 0 || secondValue <= 0 || thirdValue <= 0) {
    display.innerText = "All sides have to be of length greater 0";
  } else if (isNaN(firstValue) || isNaN(secondValue) || isNaN(thirdValue)) {
    display.innerText = "please don't leave it blank" ;
  } else if (
    firstValue + secondValue < thirdValue ||
    firstValue + thirdValue < secondValue ||
    thirdValue + secondValue < firstValue
  ) {
    display.innerText = "Invalid Triangle";
  } else if (firstValue == secondValue && secondValue == thirdValue) {
    display.innerText = "Equilateral Triangle";
  } else if (
    firstValue == secondValue ||
    firstValue == thirdValue ||
    thirdValue == secondValue
  ) {
    display.innerText = "Isosceles Triangle";
  } else {
    display.innerText = "Inequality Triangle";
  }
}


button.addEventListener("click", (e) => {
  e.preventDefault();
  let checkout = new Calculator();
  checkout.check();
});