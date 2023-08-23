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

const create = ({name, price, stock}) => {
    let newData = [
        {
            id: data.length + 1,
            name: name,
            price: price,
            stock: stock
        }
    ]

    return data.push(newData)
}

const find = ({id}) => {
    return data.find(data => data.id == id)
}

module.exports = {
    findAll,
    create,
    find
}