function submit() {
  const firstinput = document.getElementById("first");
  const secondinput = document.getElementById("second");
  const operation = document.getElementById("operation");
  const result = document.getElementById("result");

  const first = parseFloat(firstinput.value);
  const second = parseFloat(secondinput.value);
  let calculationResult;

  switch (operation.value) {
    case "Penjumlahan":
      calculationResult = first + second;
      break;
    case "Pengurangan":
      calculationResult = first - second;
      break;
    case "Perkalian":
      calculationResult = first * second;
      break;
    case "Pembagian":
      if (second !== 0) {
        calculationResult = first / second;
      } else {
        calculationResult = "Undefined";
      }
      break;
    default:
      calculationResult = "Invalid operation";
  }
  result.value = calculationResult;
}

function reset() {
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("operation").value = "";
  document.getElementById("result").value = "";
}
