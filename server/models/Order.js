const mongoose = require('mongoose')
const orderSchema = mongoose.Schema(
    {
        stripeId: String,
        paymentUrl: String,
        paid: Boolean,
        email: String,
        restaurant: String,
        items: [],
        total: Number,
    },
    { timestamps: true }
)

const order = mongoose.model('Order', orderSchema)
module.exports = order
