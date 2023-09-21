const mongoose = require('mongoose')
const restaurantSchema = mongoose.Schema({
    restaurant: String,
    type: String,
    image: String,
    logo: String,
    delivery: Number,
    freeDelivery: Number,
    menu: [],
})

const restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = restaurant
