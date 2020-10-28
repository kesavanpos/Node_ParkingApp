var express = require('express');
var router = express.Router();

const { getProducts,getProductById,
    createProduct,updateProduct,
    deleteProduct } = require('../controllers/productcontroller')

router.get('/', function(req, res){
   getProducts(req,res);
});
router.post('/', function(req, res){
   createProduct(req,res)
});

//export this router to use in our index.js
module.exports = router;