const { User, History, Books } = require("../models");
const response = require("../response");

const getAll = async (req, res) => {
  const data = await User;
  if (data.length > 0) {
    return res.status(200).json(response({ status: 200, message: "" }, data));
  } else {
    return res
      .status(404)
      .json(response({ status: 404, message: "User Not Found" }));
  }
};

const getHistory = async (req, res) => {
  const { id, nama } = req.user;
  const history = await History;
  const findHistory = history.filter((name) => name.userId === id);
  console.log(findHistory);

  const books = await Books; // Ini perlu diganti dengan cara yang benar untuk mendapatkan data buku
  const data = findHistory.map((item) => {
    const book = books.find((book) => book.id === item.bukuId);
    return {
      userId: req.user,
      bukuId: book,
      status: item.status,
    };
  });
  console.log(data);

  if (findHistory.length > 0) {
    return res.status(200).json(response({ status: 200, message: "" }, data));
  } else {
    return res.status(404).json(
      response({
        status: 404,
        message: "the user does not have a borrowing history",
      })
    );
  }
};

module.exports = { getAll, getHistory };
