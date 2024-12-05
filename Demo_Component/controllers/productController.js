const mongoose = require("mongoose");
const product = require("../models/productModel");
const productType = require("../models/productTypeModel");

exports.getAllProduct = async (req, res) => {
    try {
        const products = await product.find(); // Fetch products from the database
        console.log(products); // Debugging: Ensure products are fetched
        res.render('index', { content: 'partials/home', products }); // Pass products and content to the view
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

