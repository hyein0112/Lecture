const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function savaToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); // localStorage에 toDos를 String 형태로 저장
}

function deleteToDo(e) {
  const li = e.target.parentElement; // button의 부모요소를 li에 저장
  li.remove(); // 요소 삭제
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
  toDos.push(newTodo);
  paintToDo(newTodo);
  savaToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);  // string을 배열 형태로 전환
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);  // 각 item 마다 console.log 실행
}