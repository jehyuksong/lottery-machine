const number = document.querySelectorAll(".number"); // 숫자 가져오기
const oneBtn = document.querySelector(".turn"); // 하나씩 뽑기 버튼
const allBtn = document.querySelector(".all"); // 모든 번호 뽑기 버튼
const resetBtn = document.querySelector(".reset"); // 리셋 버튼
const plustBtn = document.querySelector(".plus"); //플러스버튼

// 숫자 6개를 넣을 빈 배열 생성
let numArr = [];

// 1~45 사이의 중복없는 랜덤숫자 6개 생성 후 배열에 담기
function generate() {
  for (i = 0; i < 6; i++) {
    let num = Math.ceil(Math.random() * 45);
    if (numArr.includes(num)) {
      i--;
    } else {
      numArr.push(num);
    }
  }
}

// 하나씩 뽑기 버튼을 누르면
oneBtn.addEventListener("click", function () {
  // 랜덤숫자 생성 함수 실행
  if (numArr.length == 0) {
    generate();
  }

  // 첫번째 공의 값이 없으면
  if (number[0].textContent === "") {
    // 랜덤숫자 값을 넣어준다.
    number[0].textContent = numArr[0];
    // 공을 보여준다.
    number[0].classList.remove("invisible");
  } else if (number[0].textContent !== "" && number[1].textContent === "") {
    number[1].textContent = numArr[1];
    number[1].classList.remove("invisible");
  } else if (number[1].textContent !== "" && number[2].textContent === "") {
    number[2].textContent = numArr[2];
    number[2].classList.remove("invisible");
  } else if (number[2].textContent !== "" && number[3].textContent === "") {
    number[3].textContent = numArr[3];
    number[3].classList.remove("invisible");
  } else if (number[3].textContent !== "" && number[4].textContent === "") {
    number[4].textContent = numArr[4];
    number[4].classList.remove("invisible");
  } else if (number[4].textContent !== "" && number[5].textContent === "") {
    number[5].textContent = numArr[5];
    plustBtn.classList.remove("invisible");
    number[5].classList.remove("invisible");
  }
});

// 모든 번호 뽑기 버튼을 누르면
allBtn.addEventListener("click", function () {
  // 랜덤 숫자 함수 실행
  if (numArr.length == 0) {
    generate();
  }
  // 공을 보여주고,
  plustBtn.classList.remove("invisible");
  // 모든 값을 넣어준다.
  for (let i = 0; i < number.length; i++) {
    number[i].textContent = numArr[i];
    number[i].classList.remove("invisible");
  }
});

// 번호 리셋하기 버튼을 누르면
resetBtn.addEventListener("click", function () {
  // 숫자 6개를 초기화해준다.
  numArr = [];

  // 모든 공을 숨기고, 숫자 값을 지운다.
  for (let i = 0; i < number.length; i++) {
    number[i].classList.add("invisible");
    plustBtn.classList.add("invisible");
    number[i].textContent = "";
  }
});

// // 번호 초기화하기
// resetBtn.addEventListener("click", function () {
//   for (i = 0; i < number.length; i++) {
//     number[i].classList.add("invisible");
//     plustBtn.classList.add("invisible");
//     number[i].textContent = "";
//   }
// });
