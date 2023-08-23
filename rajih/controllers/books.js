const { Books, History } = require("../models");
const response = require("../response");

const findAllBooks = async (req, res) => {
  const getBooks = await Books;
  const filterBooks = getBooks.filter((book) => book.status === 0);
  if (filterBooks.length > 0) {
    return res
      .status(200)
      .json(response({ status: 200, message: "" }, filterBooks));
  } else {
    return res
      .status(404)
      .json(response({ status: 404, message: "Books Not Found" }));
  }
};

const searchBooks = async (req, res) => {
  const searchQuery = req.params.keyword;
  const getBooks = await Books;

  // Cari buku berdasarkan nama
  const searchByName = getBooks.filter((book) =>
    book.nama_buku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Cari buku berdasarkan penerbit
  const searchByPublisher = getBooks.filter((book) =>
    book.penerbit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Cari buku berdasarkan ID
  const searchById = getBooks.find(
    (book) => book.id.toString() === searchQuery
  );

  let searchResult = [];
  if (searchByName.length > 0) {
    searchResult = searchByName;
  } else if (searchByPublisher.length > 0) {
    searchResult = searchByPublisher;
  } else if (searchById) {
    searchResult.push(searchById);
  }

  if (searchResult.length > 0) {
    return res
      .status(200)
      .json(response({ status: 200, message: "" }, searchResult));
  } else {
    return res
      .status(404)
      .json(response({ status: 404, message: "search not found" }));
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  const getBooks = await Books;

  const searchById = getBooks.find((book) => book.id.toString() === id);
  if (searchById !== undefined) {
    return res
      .status(200)
      .json(response({ status: 200, message: "" }, searchById));
  } else {
    return res
      .status(404)
      .json(
        response({ status: 404, message: "id buku not found" }, searchById)
      );
  }
};

const updatePinjam = async (req, res) => {
  const id = req.params.id;
  const { nama } = req.body;

  const history = await History;
  const findHistory = history.find(
    (his) =>
      his.userId.toString() === req.user.id.toString() &&
      his.bukuId.toString() === id
  );

  if (findHistory === undefined) {
    history.push({
      userId: req.user.id,
      bukuId: Number(id),
      status: 1,
    });
    res.status(200).json(response({ status: 200, message: "" }, history));
  } else {
    findHistory.status = 1;
    res.status(200).json(response({ status: 200, message: "" }, findHistory));
  }
};

const updateKembali = async (req, res) => {
  const id = req.params.id;
  const history = await History;
  const books = await Books;
  const findHistory = history.find(
    (his) =>
      his.userId.toString() === req.user.id.toString() &&
      his.bukuId.toString() === id
  );

  if (findHistory === undefined) {
    history.push({
      userId: req.user.id,
      bukuId: Number(id),
      status: 0,
    });
    const findBook = books.find((book) => book.id.toString() === id.toString());
    findBook.dipinjam += 1;

    res.status(200).json(response({ status: 200, message: "" }, history));
  } else {
    findHistory.status = 0;
    res.status(200).json(response({ status: 200, message: "" }, findHistory));
  }
};

const findRekomendasi = async (req, res) => {
  const books = await Books;

  const find = books.filter((book) => book.dipinjam >= 9);

  res.status(200).json(response({ status: 200, message: "" }, find));
};

module.exports = {
  findAllBooks,
  searchBooks,
  findById,
  updatePinjam,
  updateKembali,
  findRekomendasi,
};
