const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value; // input value를 newTodo 변수에 저장
  toDoInput.value = ""; // input vlaue 삭제
}

toDoForm.addEventListener("submit", handleToDoSubmit);