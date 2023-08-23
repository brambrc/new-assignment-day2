const express = require('express');
const bodyparser = require('body-parser')

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

const ProductRouter = require('./routes/ProductRouter')

app.use('/products', ProductRouter)

module.exports = app