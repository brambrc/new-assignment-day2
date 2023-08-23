const Product = require('../models/Product')

const get = (req, res) => {

    const data = Product.findAll()

    return res.json({
        result: 'succes',
        message: 'Berhasil menggambil data',
        data: data
    })

}

module.exports = {
    get
}