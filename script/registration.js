const message = document.querySelector(".message");
function showMessage (messageValue,color) {
  message.textContent=messageValue;
  message.style.color=color;

  
}


const form = document.querySelector(".registrationContainer");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const fullName = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;



  // Funtion. For text And color


  const isEixst = users.find(item => item.email === email);
  if (isEixst) {
    showMessage("You Already Register Please Login Now","red")
    
    
    return;
    
  }

  const user = {
    fullName,
    email,
    password,
  };

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
 showMessage("Successfully Registered","green")


  event.target.reset();
});
