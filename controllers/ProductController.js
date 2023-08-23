const Product = require('../models/Product')

const get = (req, res) => {

    const product = Product.findAll()

    return res.json({
        result: 'succes',
        message: 'Berhasil menggambil data',
        data: product
    })

}

const create = (req, res) => {

    const {name, price, stock} = req.body

    const product = Product.create({
        name: name,
        price: price,
        stock: stock
    })

    return res.json({
        result: 'success',
        message: 'Berhasil membuat data baru'
    })

}

const details = (req, res) => {

    const product = Product.find({
        id: req.id
    })

    if(!product) return res.status(404).json({
        result: 'error',
        message: 'Data tidak ditemukan'
    })

    return res.json({
        result: 'success',
        message: 'Data berhasil di temukan',
        data: product
    })

}

const update = (req, res) => {

    const {name, price, stock} = req.body
    const id = req.params.id

    const product = Product.update(id, {
        name: name,
        price: price,
        stock: stock
    })

    if(!product) return res.status(404).json({
        result: 'error',
        message: `Data buku dengan parameter id ${id} tidak ditemukan`
    })

    return res.json({
        result: 'success',
        message: 'Berhasil mengupdate data',
        data: product
    })

}

const destroy = (req, res) => {

    const id = req.params.id
    const destroyBook = Product.destroy(id)

    if(!destroyBook) return res.status(404).json({
        result: 'error',
        message: `Data product dengan id ${id} tidak ditemukan`
    })

    return res.json({
        result: 'success',
        message: 'Berhasil menghapus data product'
    })

}

module.exports = {
    get,
    create,
    details,
    update,
    destroy
}