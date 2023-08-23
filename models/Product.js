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
    let newData = {
        id: data.length + 1,
        name: name,
        price: price,
        stock: stock
    }

    return data.push(newData)
}

const find = ({ id }) => {
    return data.find(data => data.id == id)
}

const update = (id, {name, price, stock}) => {
    const books = find({id})

    if(!books) return false

    books.name = name || books.name
    books.price = parseInt(price) || books.price
    books.stock = parseInt(stock) || books.stock

    return books

}

module.exports = {
    findAll,
    create,
    find,
    update
}