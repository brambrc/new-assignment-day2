const create = (req, res, next) => {

    const {name, price, stock} = req.body
    let messages = {}

    if(!name || !name.length) messages.name = 'Name tidak boleh kosong'
    if(!price || !price.length) messages.price= 'Price tidak boleh kosong'
    if(!stock || !stock.length) messages.stock = 'Stock tidak boleh kosong'
    if(isNaN(Number(price))) messages.price = 'Price harus berupa angka'
    if(isNaN(Number(stock))) messages.stock = 'Stock harus berupa angka'

    const validation = isEmptyObject(messages)
    if(!validation) return res.status(400).json({
        result: 'error',
        message: messages
    })

    next()

}

const details = (req, res, next) => {

    const id = parseInt(req.params.id)
    if(!id || isNaN(id)) return res.status(404).json({
        result: 'error',
        message: 'Parameter id tidak valid'
    })

    req.id = id
    next()

}

const update = (req, res, next) => {

    const id = parseInt(req.params.id)
    if(!id) return res.status(400).json({
        result: 'error',
        message: 'Parameter tidak valid'
    })

    let messages = {}

    if(req.body.price && isNaN(Number(req.body.price))) messages.price = 'Price harus berupa angka'
    if(req.body.stock && isNaN(Number(req.body.stock))) messages.stock = 'Stock harus berupa angka'

    const validation = isEmptyObject(messages)
    if(!validation) return res.status(400).json({
        result: 'error',
        message: messages
    })

    next()

}

function isEmptyObject(object){
    for(let value in object){
        if(Object.hasOwn(object, value)){
            return false
        }
    }
    return true
}

module.exports = {
    create,
    details,
    update
}