// Sample products data
const products = [
    { id: 1, name: 'Asus Laptop V15', price: 44999, image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/QB/VB/WH/81482138/lenovo-v15-82c7001wih-.jpg' },
    { id: 2, name: 'Samsung Galaxy A12', price: 12999, image: 'https://fonezone.me/cdn/shop/products/a12.jpg?v=1704865678&width=500' },
    { id: 3, name: 'Samsung Tab A9', price: 14999, image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-x110ndbains/gallery/in-galaxy-tab-a9-sm-x110-sm-x110ndbains-thumb-538450527' },
    { id: 4, name: 'Iphone 16', price: 134999, image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708674162/Croma%20Assets/Communication/Mobiles/Images/300785_0_ec7bzx.png' },
    { id: 5, name: 'Apple Apple MacBook Pro 16', price: 214999, image: 'https://cdn.webshopapp.com/shops/328120/files/453130237/650x650x2/apple-macbook-pro-16-2023-zilver-m3-max-30-core-gp.jpg' },
    { id: 6, name: 'Mechanical Gaming Keyboard', price: 4999, image: 'https://m.media-amazon.com/images/I/8196nDEwHnL._AC_SL1500_.jpg' },
    { id: 7, name: 'Redgear Gaming Headphones', price: 1499, image: 'https://images.meesho.com/images/products/239262151/fpfze_512.jpg' },
    { id: 8, name: 'Toy Car for Kid', price: 1949, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/vehicle-pull-along/f/h/a/1-24-scale-big-die-cast-metal-toy-car-for-kid-model-brabus-original-imagnedbybhr5dg3.jpeg?q=20&crop=false' },
    { id: 9, name: '3D Wooden base Crystal Lamp', price: 699, image: 'https://needybucket.in/cdn/shop/files/Snapinsta.app-436566870-244229135418570_8601614963278638709_n_1080_copy_1080x1080_1.jpg?v=1717152058' },
    { id: 10, name: 'Wall Painting', price: 999, image: 'https://m.media-amazon.com/images/I/71N9bGfQSfL._AC_UF1000,1000_QL80_.jpg' },
    
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const shopSection = document.getElementById('shop-section');
const cartSection = document.getElementById('cart-section');
const productContainer = document.getElementById('product-container');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalPrice = document.getElementById('total-price');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartDisplay();
});

// Render products
function renderProducts() {
    productContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
    saveCart();
}

function updateCartDisplay() {
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>₹ ${item.price.toFixed(2)}</p>
            </div>
            <div>
                <button onclick="adjustQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="adjustQuantity(${item.id}, 1)">+</button>
                <button onclick="removeItem(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function adjustQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartDisplay();
        saveCart();
    }
}

function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Navigation
document.getElementById('view-shop').addEventListener('click', () => {
    shopSection.classList.remove('hidden');
    cartSection.classList.add('hidden');
});

document.getElementById('view-cart').addEventListener('click', () => {
    shopSection.classList.add('hidden');
    cartSection.classList.remove('hidden');
});

// Checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Payment option not Implimented yet!');
});