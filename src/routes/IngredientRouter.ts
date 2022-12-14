import express, { Request, Response } from "express";
import { IngredientsController } from "../controllers/IngredientsController";
import * as Auth from "../middleware/authenticate";
import { Ingredient } from "../models/Ingredient";

const ingredientsController = new IngredientsController();
export const ingredientRouter = express.Router({
  strict: true,
});

ingredientRouter.route("/ingredient/show/:id").get( ingredientsController.read);

ingredientRouter.route("/recipe/add").post(ingredientsController.create);
ingredientRouter.route("/recipe/update/:id").put(ingredientsController.update);
