console.log("Scripts linked!");

const button = document.querySelector("#callBtn");
const nameHead = document.querySelector("#studentName");

function callName() {
  console.log("button clicked");
}

button.addEventListener("click", callName);
