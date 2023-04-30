// var menuBtn = document.querySelector(".hamburgermenu");
// var sideNav = document.querySelector(".menu");
// var menu = document.querySelector(".hamburgermenu .hamburger-btn");

// sideNav.style.right = "-250px";

// menuBtn.onclick = function () {
//   if (sideNav.style.right == "-250px") {
//     sideNav.style.right = "0px";
//   } else {
//     sideNav.style.right = "-250px";
//   }
// };

const productContainer = document.querySelector(".product-container");
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");
  const image = document.createElement("img");
  image.classList.add("product-image");
  image.src = product.image;
  const name = document.createElement("h3");
  name.classList.add("product-title");
  name.textContent = product.title;
  const desc = document.createElement("p");
  desc.classList.add("product-description");
  desc.textContent = product.description;
  const price = document.createElement("p");
  price.classList.add("product-price");
  price.textContent = `₹${product.price.toFixed(2)}`;
  const btn = document.createElement("button");
  btn.classList.add("add-to-cart-btn");
  btn.innerHTML = "Add to Cart";
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(desc);
  card.appendChild(price);
  card.appendChild(btn);
  return card;
}
function displayProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
  });
}

async function getProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products/");
    console.log(response, "Response is here");
    // Handle the response from the API
    const products = response.data;

    // Display the products in the product grid
    displayProducts(products);
  } catch (error) {
    console.error(error);
  }
}
getProducts();
