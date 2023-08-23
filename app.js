const express = require('express');
// Import controller disini
const bookController = require('./controllers/bookController');
const { validateBook, loggingMiddleware } = require('./middleware/bookMiddleware');

const app = express();
const port = 3000;

app.use(express.json());

// menerapkan loggingMiddleware untuk semua api
app.use(loggingMiddleware);

// tulis api kalian disini
app.get('/', bookController.getBooks);
app.post('/books', validateBook, bookController.addNewBook);
app.put('/books/:bookId', validateBook, bookController.updateExistingBook);
app.delete('/books/:bookId', bookController.removeBook);


app.listen(port, () => {
    console.log(`Bookstore MVC API running at http://localhost:${port}`);
});
