const express = require("express");
const app = express();
const port = 3001;
const path = require("path");
const bodyParser = require("body-parser").json();
const router = require("./routes");
const morgan = require("morgan");

app.use(express.static("dist"));
app.use(bodyParser);
app.use(morgan("dev"));

app.use("/", router);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
