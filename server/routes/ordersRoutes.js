const express = require('express')
const router = express.Router()
const controller = require('../controllers/ordersController')

router.get('/orders/users/:email', controller.get_user_order)

module.exports = router
