const express = require('express')
const router = express.Router()
const controller = require('../controllers/usersController')

router.post('/users', controller.post_sign_in)
router.post('/users', controller.post_sign_up)

module.exports = router
