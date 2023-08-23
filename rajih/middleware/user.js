const { User, History } = require("../models");
const response = require("../response");

const userHistoryValidation = async (req, res, next) => {
  const user = await User;
  const { username } = req.params;

  const findData = user.find((users) => users.nama === username);
  if (!findData) {
    return res
      .status(404)
      .json(response({ status: 404, message: "Username Not Found" }));
  } else {
    req.user = findData;
    next();
  }
};

module.exports = { userHistoryValidation };
