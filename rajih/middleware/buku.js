const { Books, User, History } = require("../models");
const response = require("../response");

const findIdValidation = async (req, res, next) => {
  if (!isNaN(Number(req.params.id))) {
    next();
  } else {
    return res
      .status(400)
      .json(response({ status: 400, message: "id can only be number" }));
  }
};

const updateStatusBukuPinjam = async (req, res, next) => {
  const id = req.params.id;
  const { nama } = req.body;
  const books = await Books;
  const findBuku = books.find((book) => book.id.toString() === id);

  if (findBuku === undefined) {
    return res
      .status(404)
      .json(response({ status: 404, message: "id buku not found" }));
  } else if (findBuku.status === 1) {
    return res
      .status(400)
      .json(response({ status: 400, message: "the book is being borrowed" }));
  }

  const users = await User;
  const findUser = users.find((user) => user.nama.toString() === nama);
  if (findUser === undefined) {
    return res
      .status(404)
      .json(response({ status: 404, message: "user name not found" }));
  }
  req.user = findUser;
  next();
};

const updateKembaliValidation = async (req, res, next) => {
  const id = req.params.id;
  const books = await Books;
  const findBuku = books.find((book) => book.id.toString() === id);

  if (findBuku === undefined) {
    return res
      .status(404)
      .json(response({ status: 404, message: "id buku not found" }));
  } else if (findBuku.status === 0) {
    return res
      .status(400)
      .json(response({ status: 400, message: "the book has been returned" }));
  }

  next();
};

module.exports = {
  findIdValidation,
  updateStatusBukuPinjam,
  updateKembaliValidation,
};
