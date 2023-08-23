const app = require('../app')
const supertest = require('supertest')

describe('Testing product', () => {

    test('Should return 200 when get all products', async () => {
        const response = await supertest(app).get('/products')
        expect(response.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

    test('Should return 200 when successfully insert data', async () => {
        const data = {
            name: 'Teh kotak',
            price: "5000",
            stock: "200"
        }

        const response = await supertest(app).post('/products')
            .send(data)
        expect(response.status).toBe(200)
    })

    test('Should return 400 when failed insert data', async () => {
        const data = {
            name: 'Teh kotak',
            price: "5000",
        }

        const response = await supertest(app).post('/products')
            .send(data)
        expect(response.status).toBe(400)
    })

    test('Should return 200 when success get details data', async () => {
        const params = 2

        const response = await supertest(app).get(`/products/${params}`)
        expect(response.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

    test('Should return 404 when failed get details data', async () => {
        const params = 100

        const response = await supertest(app).get(`/products/${params}`)
        expect(response.status).toBe(404)
        expect(response.body.data).toBeUndefined()
    })

    test('Should return 200 when sucess update data', async () => {
        const params = 1
        const data = {
            name: 'Sprite',
            price: '25000'
        }
        const response = await supertest(app).put(`/products/${params}`)
            .send(data)
        expect(response.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

    test('Should return 404 when id params is not found', async () => {
        const params = 100
        const data = {
            name: 'Sprite',
            price: '25000'
        }
        const response = await supertest(app).put(`/products/${params}`)
            .send(data)
        expect(response.status).toBe(404)
        expect(response.body.data).toBeUndefined()
    })

    test('Should return 400 when params is invalid number id', async () => {
        const params = 'Wrong params'
        const data = {
            name: 'Sprite',
            price: '25000'
        }
        const response = await supertest(app).put(`/products/${params}`)
            .send(data)
        expect(response.status).toBe(400)
        expect(response.body.data).toBeUndefined()
    })

    test('Should return 200 when success delete data', async () => {
        const params = 3

        const response = await supertest(app).delete(`/products/${params}`)
        expect(response.status).toBe(200)
    })

    test('Should return 400 when invalid params id', async () => {
        const params = 'wrong params id'

        const response = await supertest(app).delete(`/products/${params}`)
        expect(response.status).toBe(400)
    })

    test('Should return 404 when is param is not found', async () => {
        const params = 100

        const response = await supertest(app).delete(`/products/${params}`)
        expect(response.status).toBe(404)
    })

})