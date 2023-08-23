const express = require('express');
const bodyparser = require('body-parser')

const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

const ProductRouter = require('./routes/ProductRouter')

app.use('/products', ProductRouter)

app.listen(port, () => {
    console.log(`Bookstore MVC API running at http://localhost:${port}`);
});
