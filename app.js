const express = require('express');
// Import controller disini

const app = express();
const port = 3000;

app.use(express.json());

// tulis api kalian disini


app.listen(port, () => {
    console.log(`Bookstore MVC API running at http://localhost:${port}`);
});
