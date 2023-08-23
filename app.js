const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

let products = [
  { id: 1, name: 'Produk A', price: 10.99 },
  { id: 2, name: 'Produk B', price: 20.49 },
  // Tambahkan lebih banyak produk di sini
];

// Middleware untuk memeriksa apakah produk dengan ID tertentu ada
function checkProductExists(req, res, next) {
  const productId = parseInt(req.params.id);
  const product = products.find(prod => prod.id === productId);
  if (product) {
    req.product = product;
    next();
  } else {
    res.status(404).json({ message: 'Produk tidak ditemukan' });
  }
}

// Mendapatkan daftar produk
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Mendapatkan detail produk berdasarkan ID
app.get('/api/products/:id', checkProductExists, (req, res) => {
  res.json(req.product);
});

// Menambahkan produk baru
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Memperbarui produk berdasarkan ID
app.put('/api/products/:id', checkProductExists, (req, res) => {
  req.product.name = req.body.name;
  req.product.price = req.body.price;
  res.json(req.product);
});

// Menghapus produk berdasarkan ID
app.delete('/api/products/:id', checkProductExists, (req, res) => {
  products = products.filter(prod => prod.id !== req.product.id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
