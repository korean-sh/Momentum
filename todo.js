const toDoFrom = document.querySelector(".js-toDoForm"),
  toDoInput = toDoFrom.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  //console.log(event.target.parentNode);

  // html만 지우기
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //True인 값으로만 다시 Array를 만든다.
  const cleanToDos = toDos.filter(function (toDo) {
    //console.log(toDo.id, li.id);
    return toDo.id !== parseInt(li.id);
  });
  console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  const delBtnCL = "delBtn";
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  delBtn.classList.add(delBtnCL);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    const parsedToDos = JSON.parse(loadedTodos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoFrom.addEventListener("submit", handleSubmit);
}

init();
