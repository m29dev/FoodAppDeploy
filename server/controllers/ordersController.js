const Order = require('../models/Order')

const get_orders = async (req, res) => {
    try {
        const today = new Date()
        let tDay = today.getDate()
        let tMonth = today.getMonth() + 1
        let tYear = today.getFullYear()
        const tDate = `${tDay}/${tMonth}/${tYear}`

        const orders = await Order.find()

        let todaysOrders = []

        orders.forEach((item) => {
            let day = item.createdAt.getDate()
            let month = item.createdAt.getMonth() + 1
            let year = item.createdAt.getFullYear()
            const date = `${day}/${month}/${year}`

            if (date === tDate) {
                todaysOrders.push(item)
            }
        })

        res.status(200).json(todaysOrders)
    } catch (err) {
        console.log(err)
    }
}

const get_user_order = async (req, res) => {
    try {
        const email = req.params.email
        const userOrders = await Order.find({ email }).sort({})
        res.status(200).json(userOrders)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    get_orders,
    get_user_order,
}
