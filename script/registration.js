const message = document.querySelector(".message");
const registrationContainer = document.querySelector(".registrationContainer");
registrationContainer.addEventListener("submit", function (event) {
  event.preventDefault();

  const names = event.target.names.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExist = users.find((item) => item.email === email);

  if (userExist) {
    message.textContent = "Your Already Register Please Login.";
    message.style.color = "red";
  } else {
    const user = {
      names,
      email,
      password,
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    event.target.reset();

    message.textContent = "Successfully Registered !";
    message.style.color = "green";
  }
});
