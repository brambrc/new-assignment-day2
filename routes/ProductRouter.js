const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')
const ProductMiddleware = require('../middleware/ProductMiddleware')

router.get('/', ProductController.get)
router.post('/', [ProductMiddleware.create, ProductController.create])
router.get('/:id', [ProductMiddleware.details, ProductController.details])
router.put('/:id', [ProductMiddleware.update, ProductController.update])

module.exports = router