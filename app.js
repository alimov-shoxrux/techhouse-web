// Product Data - Curated 15-item catalog (3 per category)
const products = [
    // --- KITCHEN APPLIANCES ---
    {
        id: 1,
        name: "Precision Stand Mixer",
        category: "Kitchen Appliances",
        price: 349.99,
        description: "Professional multi-speed mixer with a high-grade stainless steel bowl.",
        image: "https://www.cuisinart.co.uk/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-master-uk/default/dw01fede56/cuisinart/SM50U/SM50U%203000x3000px%20B.jpg",
        featured: true
    },
    {
        id: 2,
        name: "Digital Air Fryer",
        category: "Kitchen Appliances",
        price: 189.99,
        description: "Versatile oven for healthy frying, baking, and professional roasting.",
        image: "https://minapi.beemarket.uz/prod-media/productImages/1751869606RgXM5cDkIO6X.webp"
    },
    {
        id: 3,
        name: "Professional Blender",
        category: "Kitchen Appliances",
        price: 129.50,
        description: "High-power commercial blender for smoothies, soups, and purees.",
        image: "https://www.blendtec.com/cdn/shop/products/Connoiseur_825_c47d7725-7df3-4df4-a173-27eefc0044f6_1080x.png?v=1601400874"
    },

    // --- CLEANING APPLIANCES ---
    {
        id: 4,
        name: "Robot Vacuum",
        category: "Cleaning Appliances",
        price: 499.00,
        description: "Autonomous cleaning with cliff sensors and lidar mapping.",
        image: "https://mionline.uz/image/cache/catalog/image/cache/catalog/02.12.2024/002/8093971-1-700x700.webp",
        featured: true
    },
    {
        id: 5,
        name: "Cordless Stick Vacuum",
        category: "Cleaning Appliances",
        price: 349.99,
        description: "Lightweight cordless power with high-performance suction.",
        image: "https://store.tineco.com/cdn/shop/files/tineco-pure-one-a50s-cordless-stick-vacuum-cleaner-499230.jpg?v=1762272610&width=1214"
    },
    {
        id: 6,
        name: "Steam Mop",
        category: "Cleaning Appliances",
        price: 129.00,
        description: "Sanitize hard floors efficiently without harsh chemicals.",
        image: "https://images.thdstatic.com/productImages/199c11ba-2ef8-4887-932a-f24fc63fbdc5/svn/shark-steam-cleaners-mops-s8201-64_600.jpg"
    },

    // --- CLIMATE CONTROL ---
    {
        id: 7,
        name: "Tower Fan",
        category: "Heating & Cooling",
        price: 79.99,
        description: "Ultra-quiet oscillation for high-volume air circulation.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLOQszt6_E6NPd9mcqjHJxLkydpOiwjosJyw&s",
        featured: true
    },
    {
        id: 8,
        name: "Portable Air Conditioner",
        category: "Heating & Cooling",
        price: 549.00,
        description: "Powerful mobile cooling solution for large living spaces.",
        image: "https://www.climachill.co.uk/media/pac12k.jpg   "
    },
    {
        id: 9,
        name: "Smart Heater",
        category: "Heating & Cooling",
        price: 159.00,
        description: "Eco-mode digital precision heating with app control.",
        image: "https://olcha.uz/image/700x700/products/2021-03-20/konvektor-xiaomi-mi-smart-space-heater-s-krdnq03zm-22605-0.jpeg"
    },

    // --- PERSONAL CARE ---
    {
        id: 10,
        name: "Ionic Hair Dryer",
        category: "Personal Care",
        price: 59.99,
        description: "Fast-drying ionic technology for salon-quality results.",
        image: "https://joybox.uz/wp-content/uploads/2022/11/F3CCDD27D2000E3F9255A7E3E2C48800_112422142341.jpeg"
    },
    {
        id: 11,
        name: "Electric Shaver",
        category: "Personal Care",
        price: 89.00,
        description: "Precision titanium blades for a close, comfortable shave.",
        image: "https://mionline.uz/image/cache/catalog/image/cache/catalog/011/8-enchenblackstoneelectricshaver-8-700x700.webp"
    },
    {
        id: 12,
        name: "Sonic Toothbrush",
        category: "Personal Care",
        price: 99.00,
        description: "Deep clean ultrasonic technology with pressure sensors.",
        image: "https://www.oclean.com/cdn/shop/files/119.webp?v=1763715226&width=1801"
    },

    // --- SMART HOME ---
    {
        id: 13,
        name: "Smart Doorbell",
        category: "Smart Home Appliances",
        price: 179.99,
        description: "See and speak to visitors from anywhere in 4K resolution.",
        image: "https://mi-store.uz/wp-content/uploads/2025/01/zamok-600x600.jpg",
        featured: true
    },
    {
        id: 14,
        name: "Security Camera",
        category: "Smart Home Appliances",
        price: 129.00,
        description: "Interior AI-powered monitoring with night vision and cloud-link.",
        image: "https://www.camius.com/wp-content/uploads/2023/11/FD4KATC2-frontVIEW-1024.jpg"
    },
    {
        id: 15,
        name: "Smart Hub",
        category: "Smart Home Appliances",
        price: 199.99,
        description: "The ultimate command center for all your home smart devices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJULjERp8Q7TI8nApnElxvr8ssvVauM9idQ&s"
    }
];

const categories = [
    "All",
    "Kitchen Appliances",
    "Cleaning Appliances",
    "Heating & Cooling",
    "Personal Care",
    "Smart Home Appliances"
];

// Cart State Management
let cart = JSON.parse(localStorage.getItem('techhouse_cart')) || [];

function saveCart() {
    localStorage.setItem('techhouse_cart', JSON.stringify(cart));
    updateCartCount();
}

// Notification Helper
function showNotification(message) {
    let notification = document.getElementById('notification-toast');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification-toast';
        notification.className = 'notification';
        document.body.appendChild(notification);
    }

    notification.innerText = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    showNotification("Added to cart successfully");
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

function updateQuantity(productId, quantity) {
    if (quantity < 1) return;
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        saveCart();
        renderCart();
    }
}

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countElement.innerText = totalItems;
    }
}

// Initial Call
document.addEventListener('DOMContentLoaded', updateCartCount);
