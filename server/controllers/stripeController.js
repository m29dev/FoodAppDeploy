require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_KEY)
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET
const baseURL = process.env.CLIENT_URL
const Order = require('../models/Order')

const post_checkout = async (req, res) => {
    try {
        const { cart, email } = req.body

        if (!cart) return res.status(400).json({ message: 'cart is empty' })

        let fixedCart = []
        cart.forEach((restaurant) => {
            restaurant.items.forEach((item) => {
                fixedCart.push(item)
            })
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'blik'],
            line_items: fixedCart.map((item) => ({
                price_data: {
                    currency: 'pln',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: `${baseURL}/checkout/success?true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseURL}/checkout/cancel`,
        })

        if (!session) return res.status(400).json({ message: '400' })

        //add each order to the database
        cart.forEach(async (restaurant) => {
            let total = 0
            restaurant.items.forEach((item) => {
                total = +total + +(item.price * item.quantity)
            })

            const order = new Order({
                stripeId: session.id,
                paymentUrl: session.url,
                paid: false,
                email: email.email,
                restaurant: restaurant.restaurant,
                items: restaurant.items,
                total: total,
            })
            await order.save()
        })

        res.status(200).json(session)
    } catch (err) {
        console.log(err)
    }
}

const get_checkout_session = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)

        const session = await stripe.checkout.sessions.retrieve(id)

        if (session.payment_status === 'paid') {
            const orders = await Order.find({ stripeId: id })

            orders.forEach(async (order) => {
                order.paid = true
                await order.save()
            })
        }
        console.log('udated payment_status: ', session.payment_status)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    post_checkout,
    get_checkout_session,
}
