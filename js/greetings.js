const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CALLSSNAME = "hidden" ;
const USERNAME_KEY = "username";

const link = document.querySelector("a");
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CALLSSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if ( savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CALLSSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
