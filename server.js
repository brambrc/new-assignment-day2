const app = require('./app')
const port = 3000

app.listen(port, () => {
    console.log(`Bookstore MVC API running at http://localhost:${port}`);
});