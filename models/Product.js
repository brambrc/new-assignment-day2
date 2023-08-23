let data = [
    {
        id: 1,
        name: 'Air Mineral',
        price: 5000,
        stock: 250
    },
    {
        id: 2,
        name: 'Coca Cola',
        price: 6000,
        stock: 223
    },
    {
        id: 3,
        name: 'Oreo Supreme',
        price: 20000,
        stock: 117
    }
]

const findAll = () => {
    return data
}

const create = ({ name, price, stock }) => {
    let product = {
        id: data.length + 1,
        name: name,
        price: parseInt(price),
        stock: parseInt(stock)
    }

    return data.push(product)
}

const find = ({ id }) => {
    return data.find(data => data.id == id)
}

const update = (id, {name, price, stock}) => {
    const product = find({id})

    if(!product) return false

    product.name = name || product.name
    product.price = parseInt(price) || product.price
    product.stock = parseInt(stock) || product.stock

    return product

}

const destroy = (id) => {

    let product = find({id})
    if(!product) return false

    data = data.filter(data => data.id !== product.id)
    return true

}

module.exports = {
    findAll,
    create,
    find,
    update,
    destroy
}