const express= require ('express');
const { getAllProducts, createProduct, updateProduct,deleteProduct,getProductDetails } = require('../controller/productController.js');


const router = express.Router();

router.route('/products').get(getAllProducts);
router.route('/product/new').post(createProduct);
router.route('/product/update/:id').put(updateProduct);
router.route('/product/delete/:id').delete(deleteProduct)
router.route('/product/get/:id').get(getProductDetails);
module.exports = router;