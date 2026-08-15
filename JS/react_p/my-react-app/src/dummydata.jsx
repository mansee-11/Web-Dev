export const PRODUCTS = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    rating: 4.5,
    emoji: "🎧",
    description: "Enjoy clear and immersive sound with comfortable wireless headphones designed for music, calls, and everyday use."
  },
  {
    id: 2,
    title: "Smart Watch Pro",
    category: "Electronics",
    price: 3999,
    rating: 4.3,
    emoji: "⌚",
    description: "A stylish smart watch with useful everyday features to help you stay connected, active, and organized."
  },
  {
    id: 3,
    title: "Travel Backpack",
    category: "Accessories",
    price: 1299,
    rating: 4.6,
    emoji: "🎒",
    description: "A spacious and durable backpack with a practical design, perfect for travel, college, and everyday adventures."
  },
  {
    id: 4,
    title: "Running Shoes",
    category: "Footwear",
    price: 2199,
    rating: 4.4,
    emoji: "👟",
    description: "Lightweight and comfortable running shoes designed to provide reliable support during workouts and daily activities."
  },
  {
    id: 5,
    title: "Cotton T-Shirt",
    category: "Men",
    price: 599,
    rating: 4.1,
    emoji: "👕",
    description: "A soft and comfortable cotton T-shirt with a simple everyday style that's easy to pair with any outfit."
  },
  {
    id: 6,
    title: "Denim Jacket",
    category: "Men",
    price: 1899,
    rating: 4.2,
    emoji: "🧥",
    description: "A classic denim jacket that adds a timeless and stylish layer to casual and everyday outfits."
  },
  {
    id: 7,
    title: "Classic Sunglasses",
    category: "Accessories",
    price: 899,
    rating: 4.0,
    emoji: "🕶️",
    description: "Classic sunglasses with a stylish design, perfect for adding a fashionable touch to your everyday look."
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    category: "Electronics",
    price: 1599,
    rating: 4.7,
    emoji: "🔊",
    description: "Compact wireless speaker delivering rich sound and convenient Bluetooth connectivity for music anywhere."
  },
  {
    id: 9,
    title: "Analog Wrist Watch",
    category: "Accessories",
    price: 2799,
    rating: 4.5,
    emoji: "🕰️",
    description: "A classic analog wrist watch combining an elegant design with a timeless look suitable for everyday wear."
  },
  {
    id: 10,
    title: "Cozy Hoodie",
    category: "Women",
    price: 1099,
    rating: 4.3,
    emoji: "🧶",
    description: "A soft and cozy hoodie designed to keep you comfortable and warm while maintaining a relaxed casual style."
  },
  {
    id: 11,
    title: "Laptop Sleeve",
    category: "Electronics",
    price: 699,
    rating: 4.2,
    emoji: "💻",
    description: "A lightweight protective laptop sleeve designed to keep your device safe from scratches and everyday bumps."
  },
  {
    id: 12,
    title: "Ceramic Coffee Mug",
    category: "Home",
    price: 349,
    rating: 4.8,
    emoji: "☕",
    description: "A simple and durable ceramic coffee mug that's perfect for enjoying your favorite hot drinks at home or work."
  },
];
  
  export const CATEGORIES = ["All", "Electronics", "Accessories", "Footwear", "Men", "Women", "Home"];
  
  export const GRADIENT = {
    Electronics: "from-sky-100 to-blue-200",
    Accessories: "from-amber-100 to-orange-200",
    Footwear: "from-rose-100 to-pink-200",
    Men: "from-emerald-100 to-teal-200",
    Women: "from-fuchsia-100 to-purple-200",
    Home: "from-lime-100 to-green-200",
  };
  
  export const inr = (n) => "₹" + n.toLocaleString("en-IN");