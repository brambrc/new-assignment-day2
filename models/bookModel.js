let books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];

function getAllBooks() {
    return books;
}

function addBook(book) {
    const newBook = { id: books.length + 1, ...book};
    books.push(newBook);
    return newBook;
}

function updateBook(id, updatedBook) {
    console.log("Log from model", id, updateBook);
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        return books[index];
    }
    return null;
}

function deleteBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
};
