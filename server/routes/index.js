const router = require("express").Router();
const { getRecipes, saveRecipe, createRecipe } = require("../controllers");

router.get("/cookbook/:category", getRecipes);
router.post("/cookbook", saveRecipe);

module.exports = router;
