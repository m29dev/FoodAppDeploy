const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_KEY)
        if (conn) console.log('server has been connected to the db')
    } catch (err) {
        console.log(err)
    }
}

module.exports = dbConnect
