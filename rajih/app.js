const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { getAll, getHistory } = require("./controllers/user");
const { userHistoryValidation } = require("./middleware/user");
const {
  findAllBooks,
  searchBooks,
  findById,
  updatePinjam,
  findRekomendasi,
} = require("./controllers/books");
const {
  findIdValidation,
  updateStatusBukuPinjam,
  updateKembaliValidation,
} = require("./middleware/buku");
// Import controller disini

const app = express();
const port = 3000;

app.use(express.json());

// tulis api kalian disini
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/user", getAll);
app.get("/user/:username", userHistoryValidation, getHistory);
app.get("/buku", findAllBooks);
app.get("/buku/:keyword", searchBooks);
app.get("/bukus/:id", findIdValidation, findById);
app.put("/buku/:id", updateStatusBukuPinjam, updatePinjam);
app.delete("/buku/:id", updateKembaliValidation);
app.get("/rekomendasi", findRekomendasi);

app.listen(port, () => {
  console.log(`Bookstore MVC API running at http://localhost:${port}`);
});
