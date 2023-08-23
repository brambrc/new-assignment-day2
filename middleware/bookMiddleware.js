function validateBook(req, res, next) {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }

    next();
};

function loggingMiddleware(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

module.exports = {
    validateBook,
    loggingMiddleware
}