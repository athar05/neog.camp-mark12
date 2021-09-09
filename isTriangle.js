const input = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.getElementById("is-triangle-btn");
const output = document.getElementById("output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(input[0].value),
    Number(input[1].value),
    Number(input[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = "yay, the angles form a triangle";
  } else {
    output.innerText = "oh oh! the angles don't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
