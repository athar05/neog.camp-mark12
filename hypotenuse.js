const sides = document.querySelectorAll(".side-input");
const checkHypotenuse = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );

  const squareRoot = Math.sqrt(sumOfSquares);
  output.innerText = `The length of hypotenuse is ${squareRoot}`;
}

checkHypotenuse.addEventListener("click", calculateHypotenuse);
