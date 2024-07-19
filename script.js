function submit() {
  const firstinput = document.getElementById("first");
  const secondinput = document.getElementById("second");
  const operation = document.getElementById("operation");
  const result = document.getElementById("result");

  const first = parseFloat(firstinput.value);
  const second = parseFloat(secondinput.value);
  let calculationResult;

  switch (operation) {
    case "Penjumlahan":
      result = first + second;
      break;
    case "Pengurangan":
      result = first - second;
      break;
    case "Perkalian":
      result = first * second;
      break;
    case "Pembagian":
      if (second !== 0) {
        result = first / second;
      } else {
        result = "Undefined";
      }
      break;
  }
  result.value = calculationResult;
}
