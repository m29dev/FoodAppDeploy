const express = require('express')
const router = express.Router()
const controller = require('../controllers/stripeController')

router.post('/stripe/checkout', controller.post_checkout)
router.get('/stripe/checkout/session/:id', controller.get_checkout_session)

module.exports = router
