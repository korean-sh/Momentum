const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// function deleteUser(event) {
//   //console.log(USER_LS);
//   const btn = event.target;
//   const div = btn.parentNode;
//   const child = div.children;
//   console.log(child);
//   //console.log(h4);
//   localStorage.removeItem(USER_LS);
//   greeting.remove(child);
//   input.value = "";
//   askForName();
// }

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); // 이벤트 Default 막기
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  USERL_VALUE = text;
  const h4 = document.createElement("h4");
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  h4.innerText = `Welcome ${text} 😃`;
  greeting.appendChild(h4);

  //const logOutBtn = document.createElement("button");
  //logOutBtn.innerText = "⚙ Rename";
  //logOutBtn.addEventListener("click", deleteUser);
  //greeting.append(logOutBtn);
  //greeting.innerText = `Welcome ${text} 😃`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    // she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
