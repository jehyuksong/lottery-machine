const numbers = document.querySelectorAll(".number");
const getOne = document.querySelector(".turn");
let randomNumber = Math.ceil(Math.random() * 45);

function getOneNumber() {
  getOne.addEventListener("click", function () {
    if (numbers[0].innerText == 0) {
      numbers[0].innerText = randomNumber;
    } else if (numbers[0].innerText != 0 && numbers[1].innerText == 0) {
      numbers[1].innerText = randomNumber;
    } else if (numbers[1].innerText != 0 && numbers[2].innerText == 0) {
      numbers[2].innerText = randomNumber;
    }
  });
}

getOneNumber();
