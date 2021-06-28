const digits = Array.from(document.querySelectorAll(".email__codeInput"));
let max = 5;

for (let i = 0; i < max; i++) {
  digits[i].addEventListener("keyup", (e) => {
    digits[i].style.background = "#d2e6ff";
    if (i >= digits.length - 1) return;
    digits[i + 1].focus();
    if (e.keyCode === 9) digits[i].focus();
  });
}
