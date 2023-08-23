const express = require('express');
// Import controller disini
const bookController = require('./controllers/bookController');

const app = express();
const port = 3000;

app.use(express.json());

// tulis api kalian disini
app.get('/', bookController.getBooks);
app.post('/books', bookController.addNewBook);
app.put('/books/:bookId', bookController.updateExistingBook);
app.delete('/books/:bookId', bookController.removeBook);


app.listen(port, () => {
    console.log(`Bookstore MVC API running at http://localhost:${port}`);
});
