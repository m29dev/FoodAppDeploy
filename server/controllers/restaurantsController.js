const Restaurant = require('../models/Restaurant')

const get_restaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find()

        res.status(200).json(restaurants)
    } catch (err) {
        console.log(err)
    }
}

const get_restaurants_id = async (req, res) => {
    try {
        const id = req.params.id

        if (id.length !== 24)
            return res.status(400).json({ message: 'incorrect id' })

        const restaurant = await Restaurant.findById({ _id: id })
        if (!restaurant)
            return res.status(400).json({ message: 'restaurant no found' })

        res.status(200).json(restaurant)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    get_restaurants,
    get_restaurants_id,
}
