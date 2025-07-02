// Product Data
const products = [
    {
        id: 1,
        name: "Classic White Tee",
        price: "$45",
        category: "tops",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        price: "$89",
        category: "bottoms",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
    },
    {
        id: 3,
        name: "Summer Dress",
        price: "$120",
        category: "dresses",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80"
    },
    {
        id: 4,
        name: "Leather Jacket",
        price: "$299",
        category: "outerwear",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80"
    },
    {
        id: 5,
        name: "Oversized Sweater",
        price: "$75",
        category: "tops",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80"
    },
    {
        id: 6,
        name: "High-Waist Pants",
        price: "$95",
        category: "bottoms",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 7,
        name: "Evening Gown",
        price: "$450",
        category: "dresses",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
    },
    {
        id: 8,
        name: "Wool Coat",
        price: "$380",
        category: "outerwear",
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
];

// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const contactBtn = document.getElementById('contactBtn');
const purchaseModal = document.getElementById('purchaseModal');
const closeModal = document.getElementById('closeModal');
const productsGrid = document.getElementById('productsGrid');
const productSearch = document.getElementById('productSearch');
const categoryFilter = document.getElementById('categoryFilter');
const contactLink = document.getElementById('contactLink');
const sizeGuideLink = document.getElementById('sizeGuideLink');
const returnsLink = document.getElementById('returnsLink');
const shippingLink = document.getElementById('shippingLink');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Load products
    displayProducts(products);
    
    // Add event listeners
    addEventListeners();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
}

function addEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', openSearchModal);
    closeSearch.addEventListener('click', closeSearchModal);
    searchInput.addEventListener('keyup', handleSearch);
    
    // Product search and filtering
    productSearch.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    
    // Modal functionality
    closeModal.addEventListener('click', closePurchaseModal);
    
    // Contact and utility links
    contactBtn.addEventListener('click', openContactModal);
    contactLink.addEventListener('click', openContactModal);
    sizeGuideLink.addEventListener('click', openSizeGuide);
    returnsLink.addEventListener('click', openReturnsPolicy);
    shippingLink.addEventListener('click', openShippingInfo);
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === searchModal) {
            closeSearchModal();
        }
        if (event.target === purchaseModal) {
            closePurchaseModal();
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
}

function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card loading';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <button class="buy-button" onclick="openPurchaseModal(${product.id})">Enquire to Buy</button>
        </div>
    `;
    
    // Add loading animation
    setTimeout(() => {
        card.classList.add('loaded');
    }, 100);
    
    return card;
}

function filterProducts() {
    const searchTerm = productSearch.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    displayProducts(filteredProducts);
}

function openSearchModal() {
    searchModal.classList.add('active');
    searchInput.focus();
}

function closeSearchModal() {
    searchModal.classList.remove('active');
    searchInput.value = '';
}

function handleSearch(event) {
    if (event.key === 'Escape') {
        closeSearchModal();
    }
    // Additional search functionality can be added here
}

function openPurchaseModal(productId = null) {
    purchaseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // If a specific product is selected, you can customize the form
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            // You can modify the iframe src to include product-specific information
            console.log(`Opening purchase modal for: ${product.name}`);
        }
    }
}

function closePurchaseModal() {
    purchaseModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openContactModal() {
    // Create a simple contact modal
    const contactModal = document.createElement('div');
    contactModal.className = 'purchase-modal active';
    contactModal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <h3>Contact Us</h3>
            <form class="contact-form">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(contactModal);
    document.body.style.overflow = 'hidden';
}

function openSizeGuide() {
    const sizeModal = document.createElement('div');
    sizeModal.className = 'purchase-modal active';
    sizeModal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <h3>Size Guide</h3>
            <div class="size-guide">
                <h4>Women's Sizes</h4>
                <table>
                    <tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hips</th></tr>
                    <tr><td>XS</td><td>32"</td><td>24"</td><td>34"</td></tr>
                    <tr><td>S</td><td>34"</td><td>26"</td><td>36"</td></tr>
                    <tr><td>M</td><td>36"</td><td>28"</td><td>38"</td></tr>
                    <tr><td>L</td><td>38"</td><td>30"</td><td>40"</td></tr>
                    <tr><td>XL</td><td>40"</td><td>32"</td><td>42"</td></tr>
                </table>
            </div>
        </div>
    `;
    
    document.body.appendChild(sizeModal);
    document.body.style.overflow = 'hidden';
}

function openReturnsPolicy() {
    const returnsModal = document.createElement('div');
    returnsModal.className = 'purchase-modal active';
    returnsModal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <h3>Returns Policy</h3>
            <div class="returns-content">
                <h4>Return Window</h4>
                <p>We accept returns within 30 days of purchase for unworn items in original condition.</p>
                
                <h4>How to Return</h4>
                <p>1. Contact us via email or phone to initiate your return<br>
                2. Package your item securely with original tags attached<br>
                3. Ship to our returns address<br>
                4. Refund will be processed within 5-7 business days</p>
                
                <h4>Exclusions</h4>
                <p>Sale items, personalized items, and accessories are final sale.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(returnsModal);
    document.body.style.overflow = 'hidden';
}

function openShippingInfo() {
    const shippingModal = document.createElement('div');
    shippingModal.className = 'purchase-modal active';
    shippingModal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <h3>Shipping Information</h3>
            <div class="shipping-content">
                <h4>Standard Shipping</h4>
                <p>5-7 business days - $8.95</p>
                
                <h4>Express Shipping</h4>
                <p>2-3 business days - $15.95</p>
                
                <h4>Overnight Shipping</h4>
                <p>Next business day - $25.95</p>
                
                <h4>Free Shipping</h4>
                <p>Free standard shipping on orders over $150</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(shippingModal);
    document.body.style.overflow = 'hidden';
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        event.target.reset();
    }
}

function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
}

function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('loading');
        observer.observe(section);
    });
}

function initializeSmoothScrolling() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// All styles are now included in the main CSS file 