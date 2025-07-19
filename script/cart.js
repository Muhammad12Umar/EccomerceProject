const cartDetails = document.querySelector("#cart-details");
const totalPriceElement = document.querySelector("#total-price");
let cards = JSON.parse(localStorage.getItem("cards")) || [];

function calculateTotalPrice() {
  let total = 0;
  document.querySelectorAll(".card").forEach(card => {
    const qty = parseInt(card.querySelector(".productQuantity").textContent);
    const priceText = card.querySelector(".card-price").textContent;
    const price = parseInt(priceText.replace("Price: ", ""));
    total += qty * price;
  });
  totalPriceElement.textContent = "Total: " + total + " PKR";
}

cartDetails.innerHTML = "";

cards.forEach((element, index) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "shadow");

  // Set default quantity to 1
  let quantity = 1;

  cardDiv.innerHTML = `
    <img src="${element.image}" class="card-img-top" alt="Product Image" />
    <div class="card-body">
      <div class="card-body-container">
        <div>
          <p class="card-id">ID: ${element.productId}</p>
          <h5 class="card-title">${element.name}</h5>
          <p class="card-price">Price: ${element.price}</p>
        </div>
        <div class="productQuantity">${quantity}</div>
      </div>
      <div class="btnQuantity">
        <button class="btnAdd">➕ Add</button>
        <button class="btnSub">➖ Subtract</button>
        <button class="btnDelete">🗑️ Delete</button>
      </div>
    </div>
  `;

  cartDetails.appendChild(cardDiv);

  const productQuantity = cardDiv.querySelector(".productQuantity");
  const btnAdd = cardDiv.querySelector(".btnAdd");
  const btnSub = cardDiv.querySelector(".btnSub");
  const btnDelete = cardDiv.querySelector(".btnDelete");

  // Increase quantity
  btnAdd.addEventListener("click", () => {
    quantity += 1;
    productQuantity.textContent = quantity;
    calculateTotalPrice();
  });

  // Decrease quantity
  btnSub.addEventListener("click", () => {
    if (quantity > 1) {
      quantity -= 1;
      productQuantity.textContent = quantity;
      calculateTotalPrice();
    } else {
      // Remove card if quantity becomes 0
      cardDiv.remove();
      cards.splice(index, 1);
      localStorage.setItem("cards", JSON.stringify(cards));
      calculateTotalPrice();
    }
  });

  // Delete product
  btnDelete.addEventListener("click", () => {
    cardDiv.remove();
    cards.splice(index, 1);
    localStorage.setItem("cards", JSON.stringify(cards));
    calculateTotalPrice();
  });
});

calculateTotalPrice();
