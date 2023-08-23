const create = (req, res, next) => {

    const {name, price, stock} = req.body
    let messages = {}

    if(!name || !name.length) messages.name = 'Name cannot be null'
    if(!price || !price.length) messages.price= 'Price cannot be null'
    if(!stock || !stock.length) messages.stock = 'Stock cannot be null'
    if(isNaN(Number(price))) messages.price = 'Price must be a number'
    if(isNaN(Number(stock))) messages.stock = 'Stock must be a number'

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
        message: 'Invalid params id'
    })

    req.id = id
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
    details
}