import express,{Request, Response}  from "express";
import { RecipeController } from '../controllers/RecipeController'

const recipeController = new RecipeController
export const router = express.Router({
    strict: true
});


router.route('/recipe/show/:id').get(recipeController.read);