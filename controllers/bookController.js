const BookModel = require('../models/bookModel');

function getBooks(req, res) {
    const allBooks = BookModel.getAllBooks();
    res.status(200).json(allBooks);
}

function addNewBook(req, res) {
    const newBook = req.body;
    const addedBook = BookModel.addBook(newBook);
    res.status(200).json(addedBook);
}

function updateExistingBook(req, res) {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;
    const result = BookModel.updateBook(bookId, updatedBook);
    
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

function removeBook(req, res) {
    const bookId = parseInt(req.params.id);
    const result = BookModel.deleteBook(bookId);

    if (result) {
        res.status(200).json({ message: 'Book deleted successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

module.exports = {
    getBooks,
    addNewBook,
    updateExistingBook,
    removeBook
};
