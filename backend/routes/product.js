const express = require('express');
const router = express.Router();

const {
    getProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    delteProduct,
    createProductReview,
    getProductReviews,
    deleteReviews
} = require('../controllers/productController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/userAuth')

router
    .route('/products')
    .get(getProducts)
router
    .route('/product')
    .post(isAuthenticatedUser, authorizeRoles('admin', 'staff', 'seller'), createProduct);
router
    .route('/product/:id')
    .get(getSingleProduct)
    .put(isAuthenticatedUser, authorizeRoles('admin', 'staff', 'seller'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin', 'staff', 'seller'), delteProduct);

router
    .route('/review')
    .post(isAuthenticatedUser, createProductReview)
router
    .route('/reviews/:productId')
    .get(isAuthenticatedUser, getProductReviews)
    .delete(isAuthenticatedUser, deleteReviews)

module.exports = router;    