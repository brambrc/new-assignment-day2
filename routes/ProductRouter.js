const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')
const ProductMiddleware = require('../middleware/ProductMiddleware')

router.get('/', ProductController.get)
router.post('/', [ProductMiddleware.create, ProductController.create])

module.exports = router