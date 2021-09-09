const baseLength = document.querySelector("#base-length");
const height = document.querySelector("#height-length");
const checkAreaBtn = document.querySelector("#triangle-btn");
const output = document.querySelector("#output");

function areaOftriangle(a, b) {
  const area = 0.5 * (a * b);
  return area;
}

function checkArea() {
  const area = areaOftriangle(Number(baseLength.value), Number(height.value));

  output.innerText = `The area of the triangle is ${area}`;
}

checkAreaBtn.addEventListener("click", checkArea);
