const express = require('express')
const router = express.Router()
const controller = require('../controllers/ordersController')

router.get('/orders', controller.get_orders)
router.get('/orders/users/:email', controller.get_user_order)

module.exports = router
