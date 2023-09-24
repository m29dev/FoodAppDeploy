const Order = require('../models/Order')

const get_user_order = async (req, res) => {
    try {
        const email = req.params.email
        const userOrders = await Order.find({ email }).sort({ createdAt: -1 })
        res.status(200).json(userOrders)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    get_user_order,
}
