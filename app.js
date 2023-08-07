let cartCount = 0;
const cartCountElement = document.querySelector(".cart-count");

function updateCartCount() {
  cartCountElement.textContent = cartCount;
}

function addToCart() {
  cartCount++;
  updateCartCount();
}

// Add event listener to the cart icon to simulate adding items to the cart
const cartIcon = document.querySelector('.cart');
cartIcon.addEventListener('click', addToCart);

// Scroll to the products section when "Shop Now" button is clicked
const shopNowButton = document.querySelector('.hero-btn');
const productsSection = document.querySelector('#products'); // Replace 'products' with the actual ID of your products section

function scrollToProductsSection() {
  productsSection.scrollIntoView({ behavior: 'smooth' });
}

shopNowButton.addEventListener('click', scrollToProductsSection);