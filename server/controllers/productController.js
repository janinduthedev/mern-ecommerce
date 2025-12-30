import Product from "../models/Product.js";

// @desc   Get all products
// @route  GET /api/products
// @access Public
export const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// @desc   Get single product
// @route  GET /api/products/:id
// @access Public
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// @desc   Create product
// @route  POST /api/products
// @access Private/Admin
export const createProduct = async (req, res) => {
  const product = new Product({
    name: "Sample Product",
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    description: "Sample description",
    price: 0,
    countInStock: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};
