import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import Product from "../models/product.model.js";

config();

const seedProducts =  [
  {
    "product_name": "Classic Round Glasses",
    "description": "Timeless round glasses with a thin metal frame.",
    "price": 40.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  },
  {
    "product_name": "Modern Rectangular Glasses",
    "description": "Sleek rectangular glasses with a contemporary design.",
    "price": 50.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  },
  {
    "product_name": "Vintage Cat-Eye Glasses",
    "description": "Stylish cat-eye glasses with a retro flair.",
    "price": 45.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  },
  {
    "product_name": "Lightweight Rimless Glasses",
    "description": "Minimalistic rimless glasses for a barely-there feel.",
    "price": 55.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  },
  {
    "product_name": "Bold Square Glasses",
    "description": "Bold square glasses that make a statement.",
    "price": 60.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  },
  {
    "product_name": "Classic Aviator Glasses",
    "description": "Aviator glasses with a double bridge for a classic look.",
    "price": 65.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  },
  {
    "product_name": "Elegant Oversized Glasses",
    "description": "Elegant oversized glasses with a fashionable design.",
    "price": 70.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  },
  {
    "product_name": "Trendy Tortoise Shell Glasses",
    "description": "Trendy tortoise shell glasses with a unique pattern.",
    "price": 50.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  },
  {
    "product_name": "Sporty Wraparound Glasses",
    "description": "Sporty wraparound glasses for active lifestyles.",
    "price": 55.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  },
  {
    "product_name": "Chic Half-Rim Glasses",
    "description": "Chic half-rim glasses with a sophisticated look.",
    "price": 60.00,
    "category": "Eyewear",
    "imgs": ["https://pxhere.com/en/photo/30561"]
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await Product.insertMany(seedProducts);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
