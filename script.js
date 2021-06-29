const digits = Array.from(document.querySelectorAll(".email__codeInput"));
let max = 5;
let deleteDigit = 4;

for (let i = 0; i < max; i++) {
  digits[i].addEventListener("keyup", (e) => {
    if (digits[i].value.length > 0) {
      digits[i].style.background = "#d2e6ff";
      if (i >= digits.length - 1) return;
      digits[i + 1].focus();
      deleteDigit = 4;
    } else {
      digits[i].style.background = "#fff";
    }
    if (e.keyCode === 9) {
      digits[i].focus();
    }
    if (e.key === "Backspace" || e.key === "Delete") {
      if (i === 0) return;
      digits[i - 1].focus();
    }
  });
  digits[i].addEventListener("keydown", (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      if (deleteDigit >= 0) {
        digits[deleteDigit].style.background = "#fff";
        digits[deleteDigit--].value = "";
      } else {
        digits[0].focus();
      }
    }
  });
}
