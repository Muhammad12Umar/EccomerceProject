const message = document.querySelector(".message");
function showMesssage(values, color) {
  message.textContent = values;
  message.style.color = color;
}

const loginForm = document.querySelector(".registrationContainer");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const names = event.target.name.value;
  const email = event.target.email.value;

  const exist = users.find(
    item => item.fullName === names && item.email === email);

  if (exist) {
    showMesssage("successfully Login !", "green");
    window.location.href = "../index.html";
    localStorage.setItem("user", JSON.stringify(exist));
  } else {
    showMesssage("Please Register First !", "red");
  }
});
