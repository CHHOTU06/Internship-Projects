class Carousel {
    constructor(container) {
        this.carousel = container.querySelector('.carousel');
        this.items = Array.from(container.querySelectorAll('.carousel-item'));
        this.dotsContainer = container.querySelector('.carousel-dots');
        this.prevButton = container.querySelector('.prev');
        this.nextButton = container.querySelector('.next');
        this.currentIndex = 0;
        
        this.initDots();
        this.addEventListeners();
        this.startAutoSlide();
    }

    initDots() {
        this.items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }

    updateActiveState() {
        this.items.forEach(item => item.classList.remove('active'));
        this.items[this.currentIndex].classList.add('active');
        
        this.dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    goToSlide(index) {
        this.currentIndex = (index + this.items.length) % this.items.length;
        this.updateActiveState();
    }

    nextSlide() {
        this.goToSlide(this.currentIndex + 1);
    }

    prevSlide() {
        this.goToSlide(this.currentIndex - 1);
    }

    addEventListeners() {
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());
    }
    startAutoSlide() {
        setInterval(() => this.nextSlide(), 5000);
    }
}

// Initialize carousel
document.querySelectorAll('.carousel-container').forEach(container => {
    new Carousel(container);
});

// API Integration
const jokeButton = document.getElementById('fetchJoke');
const jokeDisplay = document.querySelector('.joke-display');

async function fetchJoke() {
    try {
        jokeDisplay.textContent = 'Loading...';
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
        const data = await response.json();
        
        if (data.type === 'twopart') {
            jokeDisplay.innerHTML = `<p><strong>${data.setup}</strong></p><p>${data.delivery}</p>`;
        } else {
            jokeDisplay.textContent = data.joke;
        }
    } catch (error) {
        jokeDisplay.textContent = 'Failed to fetch joke. Please try again.';
    }
}

jokeButton.addEventListener('click', fetchJoke);
fetchJoke();