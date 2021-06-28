const digits = Array.from(document.querySelectorAll(".email__codeInput"));
let max = 5;

for (let i = 0; i < max; i++) {
  digits[i].addEventListener("keyup", (e) => {
    if (digits[i].value.length > 0) {
      digits[i].style.background = "#d2e6ff";
      digits[i + 1].focus();
    } else {
      digits[i].style.background = "#fff";
    }
    if (i >= digits.length - 1) return;
    if (e.keyCode === 9) {
      digits[i].focus();
    }
  });
}
