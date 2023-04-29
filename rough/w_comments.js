{
    /* <div class="product-container">
          <div class="product-card">
              <img src="./images/pic2.jpg" alt="Product 1" class="product-image">
              <h3 class="product-title">Product 1</h3>
              <p class="product-description">Product 1 description goes here.</p>
              <p class="product-price">$19.99</p>
              <button class="add-to-cart-btn">Add to Cart</button>
          </div> 
      </div>
      */
  }
  
  // navbar button hamburger
  
  var menuBtn = document.querySelector(".hamburgermenu");
  var sideNav = document.querySelector(".menu");
  var menu = document.querySelector(".hamburgermenu .hamburger-btn");
  
  sideNav.style.right = "-250px";
  
  menuBtn.onclick = function () {
    //   console.log("helo");
    if (sideNav.style.right == "-250px") {
      sideNav.style.right = "0";
      // menu.src = "images/close.svg";
    } else {
      sideNav.style.right = "-250px";
      // menu.src = "images/menu.svg";
    }
  };
  
  // Get the product grid element
  const productContainer = document.querySelector(".product-container");
  // console.log(productCard, "productCard");
  
  // // Function to create a product card element
  function createProductCard(product) {
    // my parent div
    const card = document.createElement("div");
    card.classList.add("product-card");
  
    // Create the image element
    const image = document.createElement("img");
    image.classList.add("product-image");
    image.src = product.image;
  
    // Create the product name element
    const name = document.createElement("h3");
    name.classList.add("product-title");
    name.textContent = product.title;
  
    // Create the product desc element
    const desc = document.createElement("p");
    desc.classList.add("product-description");
    desc.textContent = product.description;
  
    // Create the product price element
    const price = document.createElement("p");
    price.classList.add("product-price");
    price.textContent = `₹${product.price.toFixed(2)}`;
  
    //Button
    const btn = document.createElement("button");
    btn.classList.add("add-to-cart-btn");
    btn.innerHTML = "Add to Cart";
  
    //   // Create the card element
    //   const card = document.createElement("div");
    //   card.classList.add("col-sm-6", "col-md-4", "col-lg-3", "product-card");
  
    //   // Create the card body
    //   const cardBody = document.createElement("div");
    //   cardBody.classList.add("card", "h-100");
  
    //   // Create the card content
    //   const cardContent = document.createElement("div");
    //   cardContent.classList.add("card-body");
  
    //   Append the elements to the card body
    // cardBody.appendChild(image);
    // cardContent.appendChild(name);
  
    // cardContent.appendChild(price);
    // cardBody.appendChild(cardContent);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(price);
    card.appendChild(btn);
  
    return card;
  }
  
  // Function to display the products
  function displayProducts(products) {
    // Clear the product grid
    productContainer.innerHTML = "";
  
    // Loop through each product and create a card element to display it
    products.forEach((product) => {
      const card = createProductCard(product);
      productContainer.appendChild(card);
    });
  }
  
  // Make a request to the products API endpoint using Axios
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
  