const mongoose = require("mongoose");

const connectDB = async (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("connected DB"))
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDB;
