const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// const secKey = require("crypto").randomBytes(64).toString("hex");
// console.log(secKey);

//api check
app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
