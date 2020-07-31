const router = require("express").Router();
const controller = require("../controllers");
const { getRecipes } = require("../../api/helpers");

router.get("/search/:search&:filter", (req, res) => {
  console.log("body", req.params);
  const { search, filter } = req.params;
  if (filter !== null) {
    getRecipes(search, filter)
      .then((recipes) => {
        // console.log("THESE ARE MY RECIPES", recipes.data.hits);
        res.json(recipes.data.hits);
      })
      .catch((err) => console.error(err));
  } else {
    getRecipes(search)
      .then((recipes) => {
        res.json(recipes.data.hits);
      })
      .catch((err) => console.error(err));
  }
});

router.get("/cookbook/:category", controller.getRecipes);
router.post("/cookbook", controller.saveRecipe);

module.exports = router;
