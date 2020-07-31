const {
  readRecipes,
  writeOriginalRecipe,
  writeRecipe,
} = require("../models/index.js");

module.exports = {
  getRecipes: function (req, res) {
    console.log("category?", req.params);
    readRecipes(req.params.category)
      .then((recipes) => {
        console.log("coming back from db", recipes);
        res.json(recipes);
      })
      .catch((err) => console.error(err));
  },

  saveRecipe: function (req, res) {
    console.log("req.body", req.body);
    writeRecipe(req.body)
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  },

  createRecipe: function () {},
};
