const products = [
    { name: 'Laptop', category: 'electronics', price: 44999, rating: 4.5 },
    { name: 'T-Shirt', category: 'clothing', price: 259, rating: 4.2 },
    { name: 'Headphones', category: 'electronics', price: 1500, rating: 4.7 },
    { name: 'Office Chair', category: 'furniture', price: 1499, rating: 3.9},
];

function renderProducts(productsArray) {
    const container = document.getElementById('products');
    container.innerHTML = '';
    
    productsArray.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ${product.rating}/5</p>
            <button>Buy</button>
            <button>Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

function filterAndSort() {
    const category = document.getElementById('categoryFilter').value;
    const sortValue = document.getElementById('sortBy').value;
    
    let filtered = products.filter(product => 
        category === 'all' || product.category === category
    );
    
    switch(sortValue) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    renderProducts(filtered);
}

// Event listeners
document.getElementById('categoryFilter').addEventListener('change', filterAndSort);
document.getElementById('sortBy').addEventListener('change', filterAndSort);

// Initial render
document.addEventListener('DOMContentLoaded', () => renderProducts(products));