const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본 동작 중단
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // local Storage에 username 저장
  loginForm.classList.add(HIDDEN_CLASSNAME); // class 추가
  greetingSetting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greetingSetting(savedUsername);
}

function greetingSetting(name) {
  greeting.innerText = `hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}