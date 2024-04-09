const express = require("express");
const app = express();
const task = require("./routes/task");
const connectDB = require("./db/connect");

require("dotenv").config();

app.use(express.static("./public"));
app.use(express.json());

const start = async (url) => {
  try {
    await connectDB(url);
    app.listen(3000, console.log("listening port 3000 ......"));
  } catch (e) {
    console.log(e);
  }
};

start(process.env.MONGO_URL);

app.use("/api/v1/tasks", task);
