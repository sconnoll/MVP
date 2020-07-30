const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to mongodb");
});

const recipeSchema = new mongoose.Schema({});

const Recipes = mongoose.model("Recipes", recipeSchema);

module.exports = Recipes;
