const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/", router);
app.use(cors());

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
