import express, { Request, Response } from "express";
import { RecipeController } from "../controllers/RecipeController";
import * as Auth from "../middleware/authenticate";

const recipeController = new RecipeController();
export const router = express.Router({
  strict: true,
});

router.route("/recipe/show/:id").get(Auth.authorize(['getRecipeList']), recipeController.read);
router.route("/recipe/add").post(recipeController.create);
router.route("/recipe/update/:id").put(recipeController.update);
