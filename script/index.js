// ✅ Get User From LocalStorage

const user = JSON.parse(localStorage.getItem("user"));
if (user && !sessionStorage.getItem("welcomeShown")) {
  alert(`Welcome ${user.names}`);
  sessionStorage.setItem("welcomeShown", "true");
}


// ✅ Array of Product Objects
const products = [
  { id: 1, title: "Work Space", price: 50000, image: "../assets/box (1).jpg" },
  {
    id: 2,
    title: "Deals for every grade",
    price: 4500,
    image: "../assets/box (1).png",
  },
  {
    id: 3,
    title: "Get your game on",
    price: 9000,
    image: "../assets/box (2).jpg",
  },
  { id: 4, title: "Keyboard", price: 5000, image: "../assets/box (2).png" },
  { id: 5, title: "Fashion", price: 2220, image: "../assets/box (3).jpg" },
  { id: 6, title: "Laptop", price: 9000, image: "../assets/box (3).png" },
  { id: 7, title: "Bed", price: 50000, image: "../assets/bws.png" },
  { id: 8, title: "Laptop", price: 45000, image: "../assets/box (4).png" },
  { id: 9, title: "Fashion", price: 800, image: "../assets/box (5).jpg" },
  { id: 10, title: "Laptop", price: 7000, image: "../assets/box (5).png" },
  { id: 11, title: "Health care", price: 7000, image: "../assets/box (6).jpg" },
  { id: 12, title: "Laptop", price: 600, image: "../assets/box (6).png" },
  { id: 13, title: "Workspace", price: 8000, image: "../assets/box (7).jpg" },
  { id: 14, title: "Laptop", price: 400, image: "../assets/box (7).png" },
  { id: 15, title: "Mobile", price: 3000, image: "../assets/box (8).jpg" },
  { id: 16, title: "Laptop", price: 1000, image: "../assets/box (8).png" },
  { id: 17, title: "Fashion", price: 80000, image: "../assets/box (9).jpg" },
  { id: 18, title: "Bed", price: 10000, image: "../assets/box (9).png" },
  { id: 19, title: "Pet Care", price: 3000, image: "../assets/box (10).jpg" },
  { id: 20, title: "Watch", price: 19000, image: "../assets/box (10).png" },
  { id: 21, title: "Toy", price: 29000, image: "../assets/box (11).jpg" },
  { id: 22, title: "Keyboard", price: 39000, image: "../assets/box (11).png" },
  { id: 23, title: "Keyboard", price: 49000, image: "../assets/box (12).jpg" },
  { id: 24, title: "Keyboard", price: 59000, image: "../assets/box (12).png" },
];

// ✅ Show All Products
const cardContainer = document.querySelector(".card-container");

function showProducts() {
  products.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card-list");

    card.innerHTML = `
      <div class="card shadow">
        <img src="${element.image}" class="card-img-top" alt="Product" />
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-price">Rs. ${element.price}</p>
          <button class="btnCart">Add to Cart</button>
        </div>
      </div>
    `;

    // ✅ Append to container
    cardContainer.appendChild(card);

    const btn = card.querySelector(".btnCart");
    btn.addEventListener("click", function () {
      addToCart(element.id);
    });
  });
}

showProducts();

function addToCart(productId) {
  if (!user) {
    alert("Please Register or Login First");
    return;
  }

  const product = products.find((p) => p.id === productId);
  if (!product) {
    alert("Product Not Found!");
    return;
  }

  // ✅ If cart is empty, initialize it as empty array
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const alreadyExist = cart.find((item) => item.id === productId);

  if (alreadyExist) {
    alert("Product Already Exists in Cart!");
    return;
  } else {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added To Cart Successfully!");

    updateCounter();

  }
}


function updateCounter () {
  const  counter=document.querySelector(".cart-count");
  const cart=JSON.parse(localStorage.getItem("cart"))
  counter.textContent=cart.length;

}

window.addEventListener('DOMContentLoaded',function(){
  updateCounter() 
})