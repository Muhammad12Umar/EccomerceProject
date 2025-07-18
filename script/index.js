// Greet the logged-in user
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  alert(`Welcome ${user.fullName}`);
}

// counter element
const cartCount=document.querySelector(".cart-count")
let counter=0;


// Add to cart function
function addToCart(productId, names, price, image) {
  if (!user) {
    alert("Please Register Yourself!");
    return;
  }

  // Get existing cart or create empty array
  const cards = JSON.parse(localStorage.getItem("cards")) || [];

  // Increase counter
  counter += 1;
  cartCount.textContent=counter;
 


  // Create card object
  const card = {
    productId,
    names,
    price,
    image
  };

  // Push and save
  cards.push(card);
  localStorage.setItem("cards", JSON.stringify(cards));

  alert("Added to cart!");
}
