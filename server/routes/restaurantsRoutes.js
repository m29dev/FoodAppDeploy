const express = require('express')
const router = express.Router()
const controller = require('../controllers/restaurantsController')

router.get('/restaurants', controller.get_restaurants)
router.get('/restaurants/:id', controller.get_restaurants_id)

module.exports = router
