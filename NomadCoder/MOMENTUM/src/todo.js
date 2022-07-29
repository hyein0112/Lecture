const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // li 요소 생성
  const span = document.createElement("span"); // span 요소 생성
  span.innerText = newTodo;
  const button = document.createElement("button"); // button 요소 생성
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  
  li.appendChild(span); // span을 li의 자식요소로 추가
  li.appendChild(button); // button을 li의 자식요소로 추가
  toDoList.appendChild(li); // li를 toDoList의 자식요소로 추가
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value; // input value를 newTodo 변수에 저장
  toDoInput.value = ""; // input vlaue 삭제
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);