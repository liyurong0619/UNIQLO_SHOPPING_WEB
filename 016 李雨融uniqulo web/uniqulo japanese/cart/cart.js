// Script for displaying items in the cart (cart.html)

const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Function to render the cart
function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItemsContainer.innerHTML = '';

  let total = 0;
  
  cart.forEach((item, index) => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
      <span>${item.name} - ￥${item.price.toFixed(2)}</span>
      <button class="remove-item" data-index="${index}">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItemDiv);

    total += item.price;
  });

  totalPriceElement.textContent = total.toFixed(2);

  // Attach remove item functionality
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const itemIndex = event.target.getAttribute('data-index');
      removeItem(itemIndex);
    });
  });
}

// Function to remove item from cart
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();  // Re-render the cart after removing an item
}

// Initial render of the cart
renderCart();
