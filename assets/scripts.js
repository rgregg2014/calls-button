console.log("Scripts linked!");

const button = document.querySelector("#callBtn");
const nameHead = document.querySelector("#studentName");
const students = ["Chris", "Ami", "Hugo", "James"];

function randomStudent() {
  const randomIndex = Math.floor(Math.random() * students.length);
  let randomStudent = students[randomIndex];
  return randomStudent;
}

function callName() {
  const student = randomStudent();
  nameHead.textContent = student;
}

button.addEventListener("click", callName);
