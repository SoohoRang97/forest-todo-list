const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function clearTodo(event) {
  const div = event.target.parentElement;
  const li = div.parentElement;
  for (const i in toDos) {
    if (toDos[i].id === parseInt(li.id)) {
      if (toDos[i].is_done === true) {
        div.classList.remove("A17-del");
        toDos[i].is_done = false;
      } else {
        div.classList.add("A17-del");
        toDos[i].is_done = true;
      }
    }
  }
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const div = document.createElement("div");
  const clear = document.createElement("input");
  const label = document.createElement("label");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.Text;
  button.innerText = "Delete";
  clear.type = "checkbox";
  clear.id = Math.random();
  label.htmlFor = clear.id;
  button.addEventListener("click", deleteTodo);
  clear.addEventListener("click", clearTodo);
  li.appendChild(div);
  div.appendChild(clear);
  div.appendChild(label);
  div.appendChild(span);
  li.appendChild(button);
  div.classList.add("todo_btn__box");
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    Text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
