const loginForm = document.querySelector(".loginForm");
const message = document.querySelector(".message");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(
    (item) => item.email === email && item.password === password
  );

  if (user) {
    message.textContent = "Successfully Login";
    message.style.color = "green";
    window.location.href="../index.html"

    localStorage.setItem("user",JSON.stringify(user))


  } else {
    message.textContent = "Please Register Before Login";
    message.style.color = "red";
  }
});

