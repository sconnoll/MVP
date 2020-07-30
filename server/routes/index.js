const router = require("express").Router();
const { getRecipes, saveRecipe, createRecipe } = require("../controllers");

router.get("/search", getRecipes);

module.exports = router;
