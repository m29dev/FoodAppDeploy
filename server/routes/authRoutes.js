const express = require('express')
const router = express.Router()
const controller = require('../controllers/authController')

router.post('/auth/signin', controller.post_sign_in)
router.post('/auth/signup', controller.post_sign_up)

module.exports = router
