// Script for adding items to cart (index.html)

const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Function to save cart items in localStorage
function saveCart(items) {
  localStorage.setItem('cart', JSON.stringify(items));
}

// Function to get cart items from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Add item to cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const productDiv = event.target.closest('.product');
    const productName = productDiv.getAttribute('data-name');
    const productPrice = parseFloat(productDiv.getAttribute('data-price'));
    
    let cart = getCart();
    cart.push({ name: productName, price: productPrice });
    saveCart(cart);
  });
});
