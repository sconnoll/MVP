const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cookbook", {
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
  category: String,
  dietLabels: Array,
  healthLabels: Array,
  image: String,
  ingredientLines: Array,
  label: String,
  url: String,
  created_at: { type: Date, default: Date.now },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
