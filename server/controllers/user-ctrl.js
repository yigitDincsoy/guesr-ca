const User = require('../models/user-model')

createUser = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an user',
        })
    }
    const user = new User(body)
    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }
    user.save().then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created ;-;',
            })
        })
}

updateUser = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    User.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'}).then((user) => {

        if (user===null) {
            return res
                .status(404)
                .json({ success: false, error: `User not found`})
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

deleteUser = async (req, res) => {
    await User.findByIdAndDelete( req.params.id).then((user) => {

        if (user===null) {
            return res
                .status(404)
                .json({ success: false, error: `User not found`})
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUserById = async (req, res) => {
    await User.findById(req.params.id).then((user) => {

        if (user===null) {
            return res
                .status(404)
                .json({ success: false, error: `User not found`})
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}


module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
}