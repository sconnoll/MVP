const {
  readRecipes,
  writeOriginalRecipe,
  writeRecipe,
} = require("../models/index.js");

module.exports = {
  getRecipes: function () {},

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
