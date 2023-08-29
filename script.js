let plusBtns = document.getElementsByClassName("plus-btn");
let minusBtns = document.getElementsByClassName("minus-btn");
let trashBtns = document.getElementsByClassName("fa-trash-alt");
let heartBtns = document.getElementsByClassName("fa-heart");
let firstPlusBtn = document.querySelector(".one");
let secondPlusBtn = document.querySelector(".two");
let thirdPlusBtn = document.querySelector(".three");

function total() {
  let prices = document.getElementsByClassName("unit-price");
  let qtes = document.getElementsByClassName("qte");
  let total = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum = sum + prices[i].innerHTML * qtes[i].innerHTML;
  }
  total.innerHTML = sum;
}
for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", function () {
    plusBtns[i].nextElementSibling.innerHTML++;
    // let prices = document.getElementsByClassName("unit-price");
    // let qtes = document.getElementsByClassName("qte");
    // let total = document.querySelector(".total-price");
    // let sum = 0;
    // for (let i = 0; i < prices.length; i++) {
    //   sum = sum + prices[i].innerHTML * qtes[i].innerHTML;
    // }
    // total.innerHTML = sum;
    total();
  });
}
// firstPlusBtn.addEventListener("click", function () {
//   firstPlusBtn.nextElementSibling.innerHTML++;
//   let prices = document.getElementsByClassName("unit-price");
//   let qtes = document.getElementsByClassName("qte");
//   let total = document.querySelector(".total-price");
//   sum1 = prices[0].innerHTML * qtes[0].innerHTML;
//   console.log(sum1);
//   return (total.innerHTML = sum1);
// });
// secondPlusBtn.addEventListener("click", function () {
//   secondPlusBtn.nextElementSibling.innerHTML++;
//   let prices = document.getElementsByClassName("unit-price");
//   let qtes = document.getElementsByClassName("qte");
//   let total = document.querySelector(".total-price");
//   sum2 = prices[1].innerHTML * qtes[1].innerHTML + sum1;
//   return (total.innerHTML = sum2);
// });
// thirdPlusBtn.addEventListener("click", function () {
//   thirdPlusBtn.nextElementSibling.innerHTML++;
//   let prices = document.getElementsByClassName("unit-price");
//   let qtes = document.getElementsByClassName("qte");
//   let total = document.querySelector(".total-price");
//   sum3 = prices[2].innerHTML * qtes[2].innerHTML + sum2;
//   return (total.innerHTML = sum3);
// });

for (const btn of minusBtns) {
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.innerHTML > 0) {
      btn.previousElementSibling.innerHTML--;
      total();
    }
  });
}
for (const btn of trashBtns) {
  btn.addEventListener("click", function () {
    btn.parentElement.parentElement.parentElement.remove();
    total();
  });
}
for (const btn of heartBtns) {
  btn.addEventListener("click", function () {
    btn.classList.toggle("toggleHeart");
  });
}
