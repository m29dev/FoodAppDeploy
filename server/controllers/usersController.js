// READ
// GET all users
const get_users_all = async (req, res) => {
    try {
        const users = await User.find({})
        if (!users) return res.status(400).json({ message: 'no users found' })
        res.status(200).json(users)
    } catch (err) {
        console.log(err)
    }
}

// READ
// GET id user
const get_users_id = async (req, res) => {
    try {
        const id = req.params.id
        const users = await User.findById({ _id: id })
        if (!users) return res.status(400).json({ message: 'no users found' })
        res.status(200).json(users)
    } catch (err) {
        console.log(err)
    }
}

// UPDATE
const post_users_id = async (req, res) => {
    try {
        console.log('SERVER MAIN: UPDATE user')
        const id = req.params.id
        const data = req.body

        const updateUser = await User.findByIdAndUpdate({ _id: id }, data, {
            new: true,
        })
        if (!updateUser) return res.status(400)

        res.json({ email: updateUser.email })
    } catch (err) {
        console.log(err)
    }
}

// // UPDATE
// const post_users_id = async (req, res) => {
//     try {
//         console.log('SERVER MAIN: UPDATE user')
//         const id = req.params.id
//         const data = req.body

//         const updateUser = await User.findByIdAndUpdate({ _id: id }, data, {
//             new: true,
//         })
//         if (!updateUser) return res.status(400)

//         res.json({ email: updateUser.email })
//     } catch (err) {
//         console.log(err)
//     }
// }

module.exports = {
    get_users_all,
    get_users_id,
    post_users_id,
}
