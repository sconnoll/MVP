const Recipe = require("../../db/index");

module.exports = {
  readRecipes: function () {},

  writeOriginalRecipe: function () {},

  writeRecipe: function ({
    dietLabels,
    healthLabels,
    image,
    ingredientLines,
    label,
    url,
  }) {
    return new Recipe({
      dietLabels: dietLabels,
      healthLabels: healthLabels,
      image: image,
      ingredientLines: ingredientLines,
      label: label,
      url: url,
      createAt: Date.now(),
    }).save();
  },
};
