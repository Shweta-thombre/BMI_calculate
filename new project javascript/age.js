
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (!height || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height.`;
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight.`;
  } else {
    let bmi;
    if (height > 300) {
      // Assuming height greater than 300cm is unrealistic, considering it as meters incorrectly input
      bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    } else {
      bmi = (weight / ((height * height) / 10000)).toFixed(2);
    }
    results.innerHTML = `<span>Your BMI: ${bmi}</span>`;
  }
});
