const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserProfile,
    updatePassword,
    updateProfile,
    getAllUsers,
    getUserDetails,
    updateUser,
    deleteUser,
    updateSeller,
    getAllSellers,
    getAllStaff,
    getAllData
} = require('../controllers/userController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/userAuth')

router
    .route('/register')
    .post(registerUser);

router
    .route('/login')
    .post(loginUser);

router
    .route('/password/forgot')
    .post(forgotPassword);

router
    .route('/password/reset/:token')
    .put(resetPassword);

router
    .route('/logout')
    .get(logout);

router
    .route('/me')
    .get(isAuthenticatedUser, getUserProfile)

router
    .route('/me/update')
    .put(isAuthenticatedUser, updateProfile)

router
    .route('/password/update')
    .put(isAuthenticatedUser, updatePassword);
router
    .route('/admin/staffs')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getAllStaff)
router
    .route('/admin/list')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getAllData)
router
    .route('/admin/users')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers)

router
    .route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)
router
    .route('/staff/user/:id')
    .put(isAuthenticatedUser, authorizeRoles('staff'), updateSeller)
router
    .route('/sellers')
    .get(isAuthenticatedUser, authorizeRoles('staff', 'admin'), getAllSellers)

module.exports = router;