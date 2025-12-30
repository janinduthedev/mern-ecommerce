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


// @desc   Update product
// @route  PUT /api/products/:id
// @access Private/Admin
export const updateProduct = async (req, res) => {
  const {
    name,
    image,
    brand,
    category,
    description,
    price,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.image = image || product.image;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.description = description || product.description;
    product.price = price ?? product.price;
    product.countInStock = countInStock ?? product.countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// @desc   Delete product
// @route  DELETE /api/products/:id
// @access Private/Admin
export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

