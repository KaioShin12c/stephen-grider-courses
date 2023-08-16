const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const messageInputEl = document.querySelector("#message-input");
  const messageFormEl = document.querySelector("#message-form");
  const linkInputEl = document.querySelector("#link-input");
  const linkFormEl = document.querySelector("#link-form");

  const encrypted = btoa(messageInputEl.value);

  messageFormEl.classList.add("hide");
  linkFormEl.classList.remove("hide");

  linkInputEl.value = `${window.location}#${encrypted}`;
  linkInputEl.select();
});
