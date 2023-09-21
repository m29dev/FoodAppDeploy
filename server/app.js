//main server
const express = require('express')
const app = express()
const cors = require('cors')
const dbConnect = require('./config/dbConfig')

dbConnect()
app.listen(3000, () => {
    console.log('server works on port 3000')
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'welcome to the catering server' })
})

//routes
const authRoutes = require('./routes/authRoutes')
app.use(authRoutes)

const restaurantsRoutes = require('./routes/restaurantsRoutes')
app.use(restaurantsRoutes)

const stripeRoutes = require('./routes/stripeRoutes')
app.use(stripeRoutes)

const ordersRoutes = require('./routes/ordersRoutes')
app.use(ordersRoutes)
