const Product = require('../models/Product')

const get = (req, res) => {

    const data = Product.findAll()

    return res.json({
        result: 'succes',
        message: 'Berhasil menggambil data',
        data: data
    })

}

const create = (req, res) => {

    const {name, price, stock} = req.body

    const data = Product.create({
        name: name,
        price: price,
        stock: stock
    })

    return res.json({
        result: 'success',
        message: 'Berhasil membuat data baru'
    })

}

module.exports = {
    get,
    create
}