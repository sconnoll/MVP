const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cookbook", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to mongodb");
});

const recipeSchema = new mongoose.Schema({
  id: Number,
  dietLabels: Array,
  healthLabels: Array,
  image: String,
  ingredientLines: Array,
  label: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
