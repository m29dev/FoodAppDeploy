const User = require('../models/User')
const bcrypt = require('bcrypt')

// AUTH SIGN IN
// authenticate user
const post_sign_in = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password)
            return res.status(400).json({ message: 'incorrect sign up data' })

        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({ message: 'user not authorized' })

        //auth password
        const isAuth = await bcrypt.compare(password, user.password)
        if (!isAuth)
            return res.status(400).json({ message: 'user not authorized' })

        res.json({ id: user._id, email: user.email })
    } catch (err) {
        console.log(err)
    }
}

// AUTH SIGN UP
// create user
const post_sign_up = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password)
            return res.status(400).json({ message: 'incorrect user data' })

        const userExists = await User.findOne({ email })
        if (userExists)
            return res
                .status(400)
                .json({ message: 'user with entered email already exists' })

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10)
        if (!hashedPassword)
            return res.status(400).json({ message: 'hash password err' })

        const newUser = new User({
            email,
            password: hashedPassword,
        })
        let saveUser = await newUser.save()
        if (!saveUser) return res.status(400).json(null)

        res.status(200).json({ id: saveUser._id, email: saveUser.email })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    post_sign_in,
    post_sign_up,
}
