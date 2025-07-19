const user = JSON.parse(localStorage.getItem("user"));

// Show welcome alert only once per session
if (user && !sessionStorage.getItem("welcomeShown")) {
  alert(`Welcome ${user.fullName}`);
  sessionStorage.setItem("welcomeShown", "true");
}

// Get cart count element (FIXED line 👇)
const cartCount = document.querySelector(".cart-count");

// Get existing cart or initialize
let cart = JSON.parse(localStorage.getItem("cards")) || [];

// Update initial cart count
cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

// Add to cart function
function addToCart(productId, name, price, image) {
  if (!user) {
    alert("Please register or login first!");
    return;
  }

  // Check if item already exists
  let existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ productId, name, price, image, quantity: 1 });
  }

  // Save updated cart
  localStorage.setItem("cards", JSON.stringify(cart));

  // Update cart count
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  alert("Item added to cart!");
}
