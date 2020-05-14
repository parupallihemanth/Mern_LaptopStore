const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts} = require('../controllers/product')



router.post('/product/createProduct', createProduct)
router.get('/product/getAllProducts', getAllProducts)



module.exports = router;