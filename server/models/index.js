const Recipe = require("../../db/index");

module.exports = {
  readRecipes: function (category) {
    console.log("category getting to db", category);
    return Recipe.find({ category: `${category}` })
      .sort("-createdAt")
      .exec();
  },

  writeOriginalRecipe: function () {},

  writeRecipe: function ({
    category,
    dietLabels,
    healthLabels,
    image,
    ingredientLines,
    label,
    url,
  }) {
    return new Recipe({
      category: category,
      dietLabels: dietLabels,
      healthLabels: healthLabels,
      image: image,
      ingredientLines: ingredientLines,
      label: label,
      url: url,
      created_at: Date.now(),
    }).save();
  },
};
