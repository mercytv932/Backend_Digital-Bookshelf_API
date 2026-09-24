const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connection.js");
const bookRouter = require("./routes/bookRouter.js");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/books", bookRouter); //base URL creation

app.listen(PORT, () => {
  resizeBy.send(`Server running on port http://localhost:${PORT}`);
});
