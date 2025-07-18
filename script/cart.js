const cartDetails = document.querySelector("#cart-details");
const totalQty = document.querySelector(".total-qty");

const cards = JSON.parse(localStorage.getItem("cards")) || [];

cartDetails.innerHTML = ""; // Clear previous items

// card counter
let cardCounter = 0;

cards.forEach((element, index) => {
  // Create a new div for each card
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "shadow");

  // Set the inner HTML
  cardDiv.innerHTML = `
    <img src="${element.image}" class="card-img-top" alt="Product Image" />
    <div class="card-body">
     <div class="card-body-container">
     <div> <p class="card-id">ID: ${element.productId}</p>
      <h5 class="card-title">${element.names}</h5>
      <p class="card-price">Price: ${element.price}</p></div>
      <div class="productQuantity">0</div>
     </div>
      <div class="btnQuantity">
        <button class="btnAdd">➕ Add</button>
        <button class="btnSub">➖ Subtract</button>
        <button class="btnDelete">🗑️ Delete</button>
      </div>
    </div>
  `;

  // Add card to DOM
  cartDetails.appendChild(cardDiv);

  // total Quantity

  // Delete button ka kaam
  const btnDelete = cardDiv.querySelector(".btnDelete");
  btnDelete.addEventListener("click", () => {
    // 1. Array se hatao
    cards.splice(index, 1);

    // 2. LocalStorage update karo
    localStorage.setItem("cards", JSON.stringify(cards));

    // 3. Page reload karo updated cards dikhane ke liye
    location.reload();
  });

  // Total price.
  let totalPrice = document.querySelector("#total-price");
  // card Quantity
  let count = 0;
  let total=0
  const productQuantity = document.querySelector(".productQuantity");
  const btnAdd = document.querySelector(".btnAdd");
  btnAdd.addEventListener("click", function () {
    totalPrice.textContent = element.price;
    count += 1;
    total=element.price * count;
    totalPrice.textContent = total;
    productQuantity.textContent = count;
  });

  const btnSub = document.querySelector(".btnSub");
  btnSub.addEventListener("click", function () {
    count -= 1;
    productQuantity.textContent = count;

    let totalDec=total-=element.price;
    totalPrice.textContent=totalDec;
 
    if (count <= 0) {
      count = 0;
      productQuantity.textContent = count;

      return;
    }
  });
});
