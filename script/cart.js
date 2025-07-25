const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.querySelector(".cart-container");
const cartCount = document.querySelector(".cart-count");
const totalAmount = document.querySelector(".total-amount");

window.addEventListener("DOMContentLoaded", function () {
  cartCount.textContent = cart.length;
  displayCart();
});

function displayCart() {
  cartContainer.innerHTML = ""; // Clear
  let total = 0;

  cart.forEach((element, index) => {
    // Ensure quantity exists
    if (!element.quantity) {
      element.quantity = 1;
    }

    total += element.price * element.quantity;

    const card = document.createElement("div");
    card.classList.add("card-list");
    card.innerHTML = `
      <div class="card shadow">
        <img src="${element.image}" class="card-img-Top" alt="Product" />
        <div class="card-body">
          <p>Qty: <span class="qty">${element.quantity}</span></p>      
          <h5 class="card-title">${element.title}</h5>
          <p class="card-price">Rs. ${element.price}</p>
          <div class="btn">
            <button class="btnCart del">🗑️</button>
            <button class="btnCart mins">➖</button>
            <button class="btnCart plus">➕</button>
          </div>
        </div>
      </div>
    `;

    cartContainer.appendChild(card);

    const deleteBtn = card.querySelector(".del");
    const minusBtn = card.querySelector(".mins");
    const plusBtn = card.querySelector(".plus");

    // Delete item
    deleteBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      updateCart();
    });


    // Decrease qty
    minusBtn.addEventListener("click", () => {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
                updateCart();
      }
      else if (card[index].quantity){
        
      }
    });

    // Increase qty
    plusBtn.addEventListener("click", () => {
      cart[index].quantity++;
      updateCart();
    });
  });

  totalAmount.textContent = `Rs. ${total}`;
  cartCount.textContent = cart.length;
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}
