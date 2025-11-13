const cartItems = [];
const wishlistItems = [];

function addToCart(name, price) {
  cartItems.push({ name, price });
  updateCart();
}

function addToWishlist(name) {
  wishlistItems.push(name);
  updateWishlist();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  if (cartItems.length === 0) {
    cartList.innerHTML = '<li>No items yet</li>';
    return;
  }
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
}

function updateWishlist() {
  const list = document.getElementById('wishlist-items');
  list.innerHTML = '';
  if (wishlistItems.length === 0) {
    list.innerHTML = '<li>No items yet</li>';
    return;
  }
  wishlistItems.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
  });
}

function filterCategory(cat) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (cat === 'all' || card.dataset.category === cat) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
