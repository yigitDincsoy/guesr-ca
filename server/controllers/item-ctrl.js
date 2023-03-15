const Item = require('../models/item-model')


createItem = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item',
        })
    }

    const item = new Item(body)
    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item.save().then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'Item created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Item not created ;-;',
            })
        })
}

updateItem = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    Item.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'}).then((item) => {

        if (item===null) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found`})
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

deleteItem = async (req, res) => {
    await Item.findByIdAndDelete( req.params.id).then((item) => {

        if (item===null) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found`})
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getItemById = async (req, res) => {
    await Item.findById(req.params.id).then((item) => {

        if (item===null) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found`})
        }
        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getItems = async (req, res) => {
    await Item.find(req.body).then((item) => {

        if (item===null) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found`})
        }
        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

module.exports = {
    createItem,
    updateItem,
    deleteItem,
    getItemById,
    getItems,
}