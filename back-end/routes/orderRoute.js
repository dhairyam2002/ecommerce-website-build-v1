const express = require("express");
const { newOrder, getOrdersByUser, getSingleOrder, getAllOrders, updateOrder, deleteAllOrders } = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRole } = require('../middleware/auth');

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/orders/user").get(isAuthenticatedUser, getOrdersByUser);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder).put(isAuthenticatedUser, authorizeRole("admin"), updateOrder);

router.route("/orders/all").get(isAuthenticatedUser, authorizeRole("admin"), getAllOrders);


// router.route('/order/ntallowed').delete(deleteAllOrders);

module.exports = router;