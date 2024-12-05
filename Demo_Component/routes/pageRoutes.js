const express = require('express');										
const router = express.Router();										
const pageController = require('../controllers/pageController');	
const productController = require('../controllers/productController');	

// Route definitions										
router.get('/', productController.getAllProduct); // Use getAllProduct to render the homepage
router.get('/about', pageController.about);										
router.get('/contact', pageController.contact);	
							
module.exports = router;
